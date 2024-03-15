The <!DOCTYPE html> declaration defines that this document is an HTML5 document
The <html> element is the root element of an HTML page
The <head> element contains meta information about the HTML page
The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
The <h1> element defines a large heading
The <p> element defines a paragraph

lang attribute inside the <html> tag, to declare the language of the Web page

<html lang="en"> --> specifies English as the language
<html lang="en-US"> --> specifies English as the language and United States as the country
<!-- <!DOCTYPE> -->

The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly.
It must only appear once, at the top of the page (before any HTML tags).
The <!DOCTYPE> declaration is not case sensitive.
The <!DOCTYPE> declaration for HTML5 is:

<!DOCTYPE html>

<!-- HTML Heading -->

HTML headings are defined with the <h1> to <h6> tags.

<h1> defines the most important heading. <h6> defines the least important heading

<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 1</h4>
<h5>This is heading 2</h5>
<h6>This is heading 3</h6>

<!-- Paragraph -->

HTML paragraphs are defined with the <p>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

The title attribute defines some extra information about an element
title is a tooltip

<p title="I'm a tooltip">This is a paragraph.</p>

Single or Double Quotes

<p title='John "ShotGun" Nelson'>John with double quotes</p>
<p title="John 'ShotGun' Nelson">John with single quotes</p>
<!-- Links -->

HTML links are defined with the <a> tag
<a href="https://www.w3schools.com">This is a link</a>
The link's destination is specified in the href attribute.
The href attribute specifies the URL of the page

<!-- Image -->

HTML images are defined with the <img> tag.
The source file (src), alternative text (alt), width, and height are provided as attributes:
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
alternative text (alt) -> When image is not loading this text will be visible

There are two ways to specify the URL in the src attribute:

1. Absolute URL - Links to an external image that is hosted on another website. Example: src="https://www.w3schools.com/images/img_girl.jpg".
   Notes: External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.

2. Relative URL - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src="img_girl.jpg". If the URL begins with a slash, it will be relative to the domain. Example: src="/images/img_girl.jpg".

Tip: It is almost always best to use relative URLs. They will not break if you change domain.

The href attribute of <a> specifies the URL of the page the link goes to
The src attribute of <img> specifies the path to the image to be displayed
The width and height attributes of <img> provide size information for images
The alt attribute of <img> provides an alternate text for an image
The style attribute is used to add styles to an element, such as color, font, size, and more
The lang attribute of the <html> tag declares the language of the Web page
The title attribute defines some extra information about an element

<br> tag defines a line break and is an empty element without a closing tag
