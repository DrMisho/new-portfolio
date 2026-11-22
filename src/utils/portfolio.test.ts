import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PROJECTS,
  EXPERIENCE,
  CAPABILITIES,
  EDUCATION,
  AWARDS,
  PROOF_METRICS,
} from '../data/portfolioData';
import {
  filterProjectsByCategory,
  getCategoryCounts,
  validateInquiry,
  buildInquiryDraft,
} from './portfolio';

test('filterProjectsByCategory returns all projects when category is "all"', () => {
  const result = filterProjectsByCategory(PROJECTS, 'all');
  assert.equal(result.length, PROJECTS.length);
});

test('filterProjectsByCategory filters accurately by category', () => {
  const fintech = filterProjectsByCategory(PROJECTS, 'fintech');
  assert.equal(fintech.length, 1);
  assert.equal(fintech[0].id, 'eifinn');

  const saas = filterProjectsByCategory(PROJECTS, 'saas');
  assert.equal(saas.length, 3);
  assert.ok(saas.every((p) => p.category === 'saas'));

  const crm = filterProjectsByCategory(PROJECTS, 'crm');
  assert.equal(crm.length, 1);
  assert.equal(crm[0].id, 'smartcrm');
});

test('getCategoryCounts sums cleanly to total project count', () => {
  const counts = getCategoryCounts(PROJECTS);
  assert.equal(counts.all, PROJECTS.length);
  assert.equal(
    counts.fintech + counts.saas + counts.crm + counts.platforms,
    counts.all
  );
});

test('validateInquiry rejects empty or invalid inputs and returns localized errors', () => {
  const emptyEn = validateInquiry(
    { name: '', email: 'not-an-email', topic: 'role', message: 'short' },
    'en'
  );
  assert.equal(emptyEn.valid, false);
  assert.ok(emptyEn.errors.name);
  assert.ok(emptyEn.errors.email);
  assert.ok(emptyEn.errors.message);

  const emptyAr = validateInquiry(
    { name: ' ', email: '', topic: 'role', message: '' },
    'ar'
  );
  assert.equal(emptyAr.valid, false);
  assert.match(emptyAr.errors.name ?? '', /[\u0600-\u06FF]/);
  assert.match(emptyAr.errors.email ?? '', /[\u0600-\u06FF]/);
  assert.match(emptyAr.errors.message ?? '', /[\u0600-\u06FF]/);
});

test('validateInquiry accepts complete, valid inquiry', () => {
  const res = validateInquiry({
    name: 'Tariq Mansour',
    email: 'tariq@example.com',
    topic: 'Backend / Laravel Architecture',
    message: 'We are looking for a senior Laravel engineer for our fintech team.',
  });
  assert.equal(res.valid, true);
  assert.deepEqual(res.errors, {});
});

test('buildInquiryDraft formats subject, body, and encoded mailto link', () => {
  const draft = buildInquiryDraft(
    {
      name: 'Sarah K.',
      email: 'sarah@company.io',
      topic: 'Remote Role',
      message: 'Would love to discuss a backend position.',
    },
    'mstafa.misho@gmail.com'
  );
  assert.equal(draft.subject, '[Portfolio] Remote Role — Sarah K.');
  assert.ok(draft.body.includes('sarah@company.io'));
  assert.ok(draft.mailtoHref.startsWith('mailto:mstafa.misho@gmail.com?subject='));
});

test('bilingual dataset has non-empty English and Arabic copy for all core entities', () => {
  assert.equal(PROOF_METRICS.length, 4);
  assert.equal(EXPERIENCE.length, 4);
  assert.equal(CAPABILITIES.length, 4);
  assert.equal(EDUCATION.length, 2);
  assert.equal(AWARDS.length, 5);

  for (const project of PROJECTS) {
    assert.ok(project.summary.en.length > 20);
    assert.ok(project.summary.ar.length > 20);
    assert.ok(project.highlights.length >= 2);
  }
});
