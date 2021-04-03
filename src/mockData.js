const pages = [
  {
    id: "1",
    title: "Getting Started",
    body:
      "Welcome to torch\n\nHere are the basics:\n* Create pages to build out your wiki\n* Write content using Markdown\n* No frills, no distractions",
  },
  {
    id: "2",
    title: "This Is A Document With A Very Long Name",
    body: `# Est buxoque tot eburnea cetera
## Terna arma est dum truncoque Aoniis Iunonis

Lorem markdownum credit! Mactati tamen imagine conanti, nec anhelitus vivax nec,
ad. Quem a reus parte vides patentibus tela **relevare**, pisces! Non monilia
Meleagros montes, in et materque teneat: rotarum.

> Clamore Athamanta Cithaeron Byblis solas **intrat contractosque orientis**,
> seque oblita alba sucos calcat it esse Phylius, armigerumque. Ferens quid
> soceri, [meruisse](http://www.terribilesque.com/illo-aetherioque) adspicit nam
> messes, ego numina ignarum madefactaque sacra furibunda consorte haesit.

Rara curribus, edidicitque mare. Decus arma hanc non vota: retro hic ut possent
Phoebe dixi posse erat vimque et monstri falsa sua? Caelestia rudis, ad gramen
Battum ruinas! Nulli fontes; si nec: poscor iter.

Deique auditum multoque stratum curam ne moenia manus longius gentisque dolor.
Frater an recolligis durum guttae totis **barbara** carmine, quin terna!

## Auxilium vobis

In creditus deo infamia omnes; Cyllenius urbemque nobis. Patulosque dolor easdem
sed raucaque videre scelerataque nocet tenet, sexque medio in esse, nec morti
arte Bybli quem. *Regina carmina* et fortis revocare similisque magis. Iuno
docendam! **Et atque** paludes taurus, lorisque sustinuit te rursus repulsam,
*faciem orbes*: maesta.

Sprevere Veneris. Pilas spicula, nunc est Iovem, danda Ianthe modo pressit ora
terra meritis o Paeonas. Data sine es [quod](http://inops.com/quem.html)
Inarimen tempore magnus ex causam milite precesque incommendataque frondibus
**cupidusque pennas**. Neque alto in perque me Troiae auctor sparsa.

Populis plangoris edere, tuos ore succeditis posse ore natura gravitate probetne
annis partem indignantia [suae](http://telisnon.org/), iam. In quondam et bonis,
in est, super isto. Enim Iuppiter fauces motu; penetrat vulnera: murmur
funduntur, Maeandri conplectens; est credite. Dolosas cinctam si moenia, voce
quique rerum parente commune, in [coma](http://ubi-aras.com/sui.php).

Neque facit pudorem redit hanc adit gaudet spoliisque servatoremque sorores
faciemque, per. Tamen e pressere natos, parva *et* recepit paene
[prodigiosa](http://etmeae.com/quique.php), lacus non, sub altos praeter amore.
Aequora Phoebus excipiunt saepius: videt anus, est medio. Habendam satis
caestibus vulnere cacumine sol quem amare si parva.`,
  },
];

export const getPageById = async function (id) {
  await sleep(1300);
  return pages.find((page) => page.id === id);
};

export const getPages = async function () {
  await sleep(800);
  return pages.map((page) => ({ id: page.id, title: page.title }));
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
