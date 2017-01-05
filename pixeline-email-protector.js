/* EMAIL PROTECTOR v1.3.0 */
var pxln_emails = document.querySelectorAll('span.pep-email');

if (typeof pxln_emails != 'undefined') {
	for (i = 0; i < pxln_emails.length; ++i) {
		var peptitle = pxln_emails[i].title;
		var pepemail = pxln_emails[i].innerHTML.replace(/\s*\(.+\)\s*/, "@");
		if (peptitle === '') {
			peptitle = pepemail;
		}
		pxln_emails[i].insertAdjacentHTML('beforebegin', '<a class="pep-email" href="mailto:' + pepemail + '">' + peptitle + "</a>");
		pxln_emails[i].parentNode.removeChild(pxln_emails[i]);
	}
}