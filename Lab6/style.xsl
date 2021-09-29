<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<body style="font-family:Arial; font-size:12pt; background-color:#181616fa;">
<h1 style="font-weight:bold; font-family:Arial; font-size:24pt; color:white; text-align: center; padding: 20px; border-bottom: 1px solid #fff;">Play Productions</h1>

<xsl:for-each select="production-list/production">

  <div style="padding:20px; margin-bottom: 1rem; line-height: 1.5">
    
    <div style="color: white; font-weight: bold; font-size: 1.5rem; padding-bottom: 10px;"> 
      <xsl:value-of select="number"/>.
      <xsl:value-of select="name"/> 
    </div>

    <div style="color: #ccc; font-weight: 400; font-size: 1rem; padding-bottom: 10px;"> 
      <div style="font-weight: bold; font-size: 1.1rem;">Synopsis: </div>
      <xsl:value-of select="synopsis"/>
    </div>

    <div style="color: #ccc; font-weight: 400; font-size: 1rem; padding-bottom: 5px;"> 
      <span style="font-weight: bold; font-size: 1rem;">Director: </span>
      <xsl:value-of select="director"/>
    </div>

    <div style="color: #ccc; font-weight: 400; font-size: 1rem; padding-bottom: 5px;"> 
      <span style="font-weight: bold; font-size: 1rem;">Playwright: </span>
      <xsl:value-of select="playwright"/>
    </div>

    <div style="color: #ccc; font-weight: 400; font-size: 1rem; padding-bottom: 5px;"> 
      <span style="font-weight: bold; font-size: 1rem;">Cast: </span>
      <ul>
        <xsl:for-each select="cast-list/cast">
          <li><xsl:value-of select="cast-name"/></li>
        </xsl:for-each>
      </ul>
    </div>
  </div>

</xsl:for-each>
</body>
</html>