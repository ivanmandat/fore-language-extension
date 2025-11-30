# GetFonts: Операция

GetFonts: Операция
-


**


# GetFonts


## Синтаксис


GetFontsResult GetFonts()


## Описание


Операция GetFonts получает список
 системных шрифтов, установленных на BI-сервере.


## Комментарии


Для выполнения операции не требуется указание каких-либо параметров.
 Результатом операции будет коллекция с описанием доступных шрифтов.


## Пример


Ниже приведён пример получения списка системных шрифтов, установленных
 на BI-сервере.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
  <GetFonts xmlns="**http://www.fsight.ru/PP.SOM.Som**" />
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetFontsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<fonts xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <ff>Arial</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arial</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arial Black</ff>  <fw>900</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arial$Black</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arial Narrow</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arial$Narrow</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arial Unicode MS</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arial$Unicode$MS</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Caption</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Caption</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Display</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Display</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Light Display</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Light$Display</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro SmText</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$SmText</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Smbd</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Smbd</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Smbd Caption</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Smbd$Caption</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Smbd Display</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Smbd$Display</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Smbd SmText</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Smbd$SmText</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Smbd Subhead</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Smbd$Subhead</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Arno Pro Subhead</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Arno$Pro$Subhead</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift Condensed</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$Condensed</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift Light</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift Light Condensed</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$Light$Condensed</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift Light SemiCondensed</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$Light$SemiCondensed</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift SemiBold</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$SemiBold</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift SemiBold Condensed</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$SemiBold$Condensed</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift SemiBold SemiConden</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$SemiBold$SemiConden</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift SemiCondensed</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$SemiCondensed</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift SemiLight</ff>  <fw>350</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$SemiLight</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift SemiLight Condensed</ff>  <fw>350</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$SemiLight$Condensed</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bahnschrift SemiLight SemiConde</ff>  <fw>350</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bahnschrift$SemiLight$SemiConde</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Book Antiqua</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Book$Antiqua</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Bookman Old Style</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Bookman$Old$Style</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Buxton Sketch</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Buxton$Sketch</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Calibri</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Calibri</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Calibri Light</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Calibri$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Cambria</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Cambria</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Cambria Math</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Cambria$Math</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Candara</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Candara</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Candara Light</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Candara$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Century</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Century</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Century Gothic</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Century$Gothic</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Century Schoolbook</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Century$Schoolbook</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Comic Sans MS</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Comic$Sans$MS</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Consolas</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Consolas</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Constantia</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Constantia</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Corbel</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Corbel</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Corbel Light</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Corbel$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Courier New</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Courier$New</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Ebrima</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Ebrima</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Franklin Gothic Book</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Franklin$Gothic$Book</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Franklin Gothic Demi</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Franklin$Gothic$Demi</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Franklin Gothic Demi Cond</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Franklin$Gothic$Demi$Cond</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Franklin Gothic Heavy</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Franklin$Gothic$Heavy</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Franklin Gothic Medium</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Franklin$Gothic$Medium</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Franklin Gothic Medium Cond</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Franklin$Gothic$Medium$Cond</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Gabriola</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Gabriola</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Gadugi</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Gadugi</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Garamond</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Garamond</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Garamond Premr Pro</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Garamond$Premr$Pro</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Garamond Premr Pro Smbd</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Garamond$Premr$Pro$Smbd</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Georgia</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Georgia</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Haettenschweiler</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Haettenschweiler</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Impact</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Impact</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Gothic Pro B</ff>  <fw>700</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$B</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Gothic Pro EL</ff>  <fw>250</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$EL</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Gothic Pro H</ff>  <fw>900</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$H</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Gothic Pro L</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$L</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Gothic Pro M</ff>  <fw>500</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$M</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Gothic Pro R</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$R</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Mincho Pro B</ff>  <fw>700</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$B</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Mincho Pro EL</ff>  <fw>250</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$EL</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Mincho Pro H</ff>  <fw>900</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$H</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Mincho Pro L</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$L</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Mincho Pro M</ff>  <fw>500</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$M</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Kozuka Mincho Pro R</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$R</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Leelawadee UI</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Leelawadee$UI</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Lucida Console</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Lucida$Console</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Lucida Sans Unicode</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Lucida$Sans$Unicode</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>MS Gothic</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=MS$Gothic</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>MS PGothic</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=MS$PGothic</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>MS Reference Sans Serif</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=MS$Reference$Sans$Serif</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>MS UI Gothic</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=MS$UI$Gothic</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Malgun Gothic</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Malgun$Gothic</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Malgun Gothic Semilight</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Malgun$Gothic$Semilight</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft JhengHei</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$JhengHei</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft JhengHei UI</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$JhengHei$UI</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft JhengHei UI Light</ff>  <fw>290</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$JhengHei$UI$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft MHei</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$MHei</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft NeoGothic</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$NeoGothic</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft Sans Serif</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$Sans$Serif</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft YaHei</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$YaHei</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft YaHei Light</ff>  <fw>290</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$YaHei$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft YaHei UI</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$YaHei$UI</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Microsoft YaHei UI Light</ff>  <fw>290</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Microsoft$YaHei$UI$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Minion Pro</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Minion$Pro</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Minion Pro Cond</ff>  <fw>700</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Minion$Pro$Cond</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Minion Pro Med</ff>  <fw>500</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Minion$Pro$Med</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Minion Pro SmBd</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Minion$Pro$SmBd</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Mistral</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Mistral</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Monotype Corsiva</ff>  <fw>400</fw>  <fs>italic</fs>  <url>/PP.GetBinFont?FileName=Monotype$Corsiva</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Myriad Pro</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Myriad$Pro</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Myriad Pro Cond</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Myriad$Pro$Cond</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Myriad Pro Light</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Myriad$Pro$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>NSimSun</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=NSimSun</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Nirmala UI</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Nirmala$UI</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Nirmala UI Semilight</ff>  <fw>350</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Nirmala$UI$Semilight</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Palatino Linotype</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Palatino$Linotype</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe Print</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$Print</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe Script</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$Script</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe UI</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$UI</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe UI Black</ff>  <fw>900</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$UI$Black</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe UI Light</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$UI$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe UI Semibold</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$UI$Semibold</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe UI Semilight</ff>  <fw>350</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$UI$Semilight</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe WP</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$WP</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe WP Black</ff>  <fw>800</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$WP$Black</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe WP Light</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$WP$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe WP SemiLight</ff>  <fw>350</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$WP$SemiLight</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Segoe WP Semibold</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Segoe$WP$Semibold</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>SimSun</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=SimSun</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>SimSun-ExtB</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=SimSun-ExtB</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Sitka Banner</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Sitka$Banner</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Sitka Display</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Sitka$Display</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Sitka Heading</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Sitka$Heading</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Sitka Small</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Sitka$Small</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Sitka Subheading</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Sitka$Subheading</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Sitka Text</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Sitka$Text</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Sylfaen</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Sylfaen</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Tahoma</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Tahoma</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Times New Roman</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Times$New$Roman</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Trebuchet MS</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Trebuchet$MS</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Verdana</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Verdana</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Yu Gothic</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Yu$Gothic</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Yu Gothic Light</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Yu$Gothic$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Yu Gothic Medium</ff>  <fw>500</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Yu$Gothic$Medium</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Yu Gothic UI</ff>  <fw>400</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Yu$Gothic$UI</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Yu Gothic UI Light</ff>  <fw>300</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Yu$Gothic$UI$Light</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Yu Gothic UI Semibold</ff>  <fw>600</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Yu$Gothic$UI$Semibold</url>  </it>
[![](../../minus.gif)](../../#)<it>
  <ff>Yu Gothic UI Semilight</ff>  <fw>350</fw>  <fs>normal</fs>  <url>/PP.GetBinFont?FileName=Yu$Gothic$UI$Semilight</url>  </it>
  </fonts>
  </GetFontsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetFonts" : ""
}

### JSON-ответ:


{
 "GetFontsResult" :
  {
   "fonts" :
    {
     "it" :
      [
        {
         "ff" : "Arial",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arial"
        },
        {
         "ff" : "Arial Black",
         "fw" : "900",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arial$Black"
        },
        {
         "ff" : "Arial Narrow",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arial$Narrow"
        },
        {
         "ff" : "Arial Unicode MS",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arial$Unicode$MS"
        },
        {
         "ff" : "Arno Pro",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro"
        },
        {
         "ff" : "Arno Pro Caption",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Caption"
        },
        {
         "ff" : "Arno Pro Display",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Display"
        },
        {
         "ff" : "Arno Pro Light Display",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Light$Display"
        },
        {
         "ff" : "Arno Pro SmText",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$SmText"
        },
        {
         "ff" : "Arno Pro Smbd",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Smbd"
        },
        {
         "ff" : "Arno Pro Smbd Caption",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Smbd$Caption"
        },
        {
         "ff" : "Arno Pro Smbd Display",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Smbd$Display"
        },
        {
         "ff" : "Arno Pro Smbd SmText",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Smbd$SmText"
        },
        {
         "ff" : "Arno Pro Smbd Subhead",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Smbd$Subhead"
        },
        {
         "ff" : "Arno Pro Subhead",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Arno$Pro$Subhead"
        },
        {
         "ff" : "Bahnschrift",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift"
        },
        {
         "ff" : "Bahnschrift Condensed",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$Condensed"
        },
        {
         "ff" : "Bahnschrift Light",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$Light"
        },
        {
         "ff" : "Bahnschrift Light Condensed",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$Light$Condensed"
        },
        {
         "ff" : "Bahnschrift Light SemiCondensed",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$Light$SemiCondensed"
        },
        {
         "ff" : "Bahnschrift SemiBold",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$SemiBold"
        },
        {
         "ff" : "Bahnschrift SemiBold Condensed",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$SemiBold$Condensed"
        },
        {
         "ff" : "Bahnschrift SemiBold SemiConden",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$SemiBold$SemiConden"
        },
        {
         "ff" : "Bahnschrift SemiCondensed",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$SemiCondensed"
        },
        {
         "ff" : "Bahnschrift SemiLight",
         "fw" : "350",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$SemiLight"
        },
        {
         "ff" : "Bahnschrift SemiLight Condensed",
         "fw" : "350",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$SemiLight$Condensed"
        },
        {
         "ff" : "Bahnschrift SemiLight SemiConde",
         "fw" : "350",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bahnschrift$SemiLight$SemiConde"
        },
        {
         "ff" : "Book Antiqua",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Book$Antiqua"
        },
        {
         "ff" : "Bookman Old Style",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Bookman$Old$Style"
        },
        {
         "ff" : "Buxton Sketch",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Buxton$Sketch"
        },
        {
         "ff" : "Calibri",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Calibri"
        },
        {
         "ff" : "Calibri Light",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Calibri$Light"
        },
        {
         "ff" : "Cambria",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Cambria"
        },
        {
         "ff" : "Cambria Math",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Cambria$Math"
        },
        {
         "ff" : "Candara",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Candara"
        },
        {
         "ff" : "Candara Light",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Candara$Light"
        },
        {
         "ff" : "Century",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Century"
        },
        {
         "ff" : "Century Gothic",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Century$Gothic"
        },
        {
         "ff" : "Century Schoolbook",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Century$Schoolbook"
        },
        {
         "ff" : "Comic Sans MS",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Comic$Sans$MS"
        },
        {
         "ff" : "Consolas",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Consolas"
        },
        {
         "ff" : "Constantia",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Constantia"
        },
        {
         "ff" : "Corbel",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Corbel"
        },
        {
         "ff" : "Corbel Light",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Corbel$Light"
        },
        {
         "ff" : "Courier New",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Courier$New"
        },
        {
         "ff" : "Ebrima",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Ebrima"
        },
        {
         "ff" : "Franklin Gothic Book",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Franklin$Gothic$Book"
        },
        {
         "ff" : "Franklin Gothic Demi",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Franklin$Gothic$Demi"
        },
        {
         "ff" : "Franklin Gothic Demi Cond",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Franklin$Gothic$Demi$Cond"
        },
        {
         "ff" : "Franklin Gothic Heavy",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Franklin$Gothic$Heavy"
        },
        {
         "ff" : "Franklin Gothic Medium",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Franklin$Gothic$Medium"
        },
        {
         "ff" : "Franklin Gothic Medium Cond",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Franklin$Gothic$Medium$Cond"
        },
        {
         "ff" : "Gabriola",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Gabriola"
        },
        {
         "ff" : "Gadugi",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Gadugi"
        },
        {
         "ff" : "Garamond",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Garamond"
        },
        {
         "ff" : "Garamond Premr Pro",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Garamond$Premr$Pro"
        },
        {
         "ff" : "Garamond Premr Pro Smbd",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Garamond$Premr$Pro$Smbd"
        },
        {
         "ff" : "Georgia",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Georgia"
        },
        {
         "ff" : "Haettenschweiler",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Haettenschweiler"
        },
        {
         "ff" : "Impact",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Impact"
        },
        {
         "ff" : "Kozuka Gothic Pro B",
         "fw" : "700",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$B"
        },
        {
         "ff" : "Kozuka Gothic Pro EL",
         "fw" : "250",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$EL"
        },
        {
         "ff" : "Kozuka Gothic Pro H",
         "fw" : "900",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$H"
        },
        {
         "ff" : "Kozuka Gothic Pro L",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$L"
        },
        {
         "ff" : "Kozuka Gothic Pro M",
         "fw" : "500",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$M"
        },
        {
         "ff" : "Kozuka Gothic Pro R",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Gothic$Pro$R"
        },
        {
         "ff" : "Kozuka Mincho Pro B",
         "fw" : "700",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$B"
        },
        {
         "ff" : "Kozuka Mincho Pro EL",
         "fw" : "250",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$EL"
        },
        {
         "ff" : "Kozuka Mincho Pro H",
         "fw" : "900",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$H"
        },
        {
         "ff" : "Kozuka Mincho Pro L",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$L"
        },
        {
         "ff" : "Kozuka Mincho Pro M",
         "fw" : "500",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$M"
        },
        {
         "ff" : "Kozuka Mincho Pro R",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Kozuka$Mincho$Pro$R"
        },
        {
         "ff" : "Leelawadee UI",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Leelawadee$UI"
        },
        {
         "ff" : "Lucida Console",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Lucida$Console"
        },
        {
         "ff" : "Lucida Sans Unicode",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Lucida$Sans$Unicode"
        },
        {
         "ff" : "MS Gothic",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=MS$Gothic"
        },
        {
         "ff" : "MS PGothic",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=MS$PGothic"
        },
        {
         "ff" : "MS Reference Sans Serif",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=MS$Reference$Sans$Serif"
        },
        {
         "ff" : "MS UI Gothic",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=MS$UI$Gothic"
        },
        {
         "ff" : "Malgun Gothic",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Malgun$Gothic"
        },
        {
         "ff" : "Malgun Gothic Semilight",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Malgun$Gothic$Semilight"
        },
        {
         "ff" : "Microsoft JhengHei",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$JhengHei"
        },
        {
         "ff" : "Microsoft JhengHei UI",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$JhengHei$UI"
        },
        {
         "ff" : "Microsoft JhengHei UI Light",
         "fw" : "290",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$JhengHei$UI$Light"
        },
        {
         "ff" : "Microsoft MHei",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$MHei"
        },
        {
         "ff" : "Microsoft NeoGothic",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$NeoGothic"
        },
        {
         "ff" : "Microsoft Sans Serif",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$Sans$Serif"
        },
        {
         "ff" : "Microsoft YaHei",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$YaHei"
        },
        {
         "ff" : "Microsoft YaHei Light",
         "fw" : "290",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$YaHei$Light"
        },
        {
         "ff" : "Microsoft YaHei UI",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$YaHei$UI"
        },
        {
         "ff" : "Microsoft YaHei UI Light",
         "fw" : "290",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Microsoft$YaHei$UI$Light"
        },
        {
         "ff" : "Minion Pro",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Minion$Pro"
        },
        {
         "ff" : "Minion Pro Cond",
         "fw" : "700",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Minion$Pro$Cond"
        },
        {
         "ff" : "Minion Pro Med",
         "fw" : "500",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Minion$Pro$Med"
        },
        {
         "ff" : "Minion Pro SmBd",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Minion$Pro$SmBd"
        },
        {
         "ff" : "Mistral",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Mistral"
        },
        {
         "ff" : "Monotype Corsiva",
         "fw" : "400",
         "fs" : "italic",
         "url" : "\/PP.GetBinFont?FileName=Monotype$Corsiva"
        },
        {
         "ff" : "Myriad Pro",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Myriad$Pro"
        },
        {
         "ff" : "Myriad Pro Cond",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Myriad$Pro$Cond"
        },
        {
         "ff" : "Myriad Pro Light",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Myriad$Pro$Light"
        },
        {
         "ff" : "NSimSun",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=NSimSun"
        },
        {
         "ff" : "Nirmala UI",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Nirmala$UI"
        },
        {
         "ff" : "Nirmala UI Semilight",
         "fw" : "350",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Nirmala$UI$Semilight"
        },
        {
         "ff" : "Palatino Linotype",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Palatino$Linotype"
        },
        {
         "ff" : "Segoe Print",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$Print"
        },
        {
         "ff" : "Segoe Script",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$Script"
        },
        {
         "ff" : "Segoe UI",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$UI"
        },
        {
         "ff" : "Segoe UI Black",
         "fw" : "900",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$UI$Black"
        },
        {
         "ff" : "Segoe UI Light",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$UI$Light"
        },
        {
         "ff" : "Segoe UI Semibold",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$UI$Semibold"
        },
        {
         "ff" : "Segoe UI Semilight",
         "fw" : "350",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$UI$Semilight"
        },
        {
         "ff" : "Segoe WP",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$WP"
        },
        {
         "ff" : "Segoe WP Black",
         "fw" : "800",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$WP$Black"
        },
        {
         "ff" : "Segoe WP Light",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$WP$Light"
        },
        {
         "ff" : "Segoe WP SemiLight",
         "fw" : "350",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$WP$SemiLight"
        },
        {
         "ff" : "Segoe WP Semibold",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Segoe$WP$Semibold"
        },
        {
         "ff" : "SimSun",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=SimSun"
        },
        {
         "ff" : "SimSun-ExtB",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=SimSun-ExtB"
        },
        {
         "ff" : "Sitka Banner",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Sitka$Banner"
        },
        {
         "ff" : "Sitka Display",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Sitka$Display"
        },
        {
         "ff" : "Sitka Heading",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Sitka$Heading"
        },
        {
         "ff" : "Sitka Small",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Sitka$Small"
        },
        {
         "ff" : "Sitka Subheading",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Sitka$Subheading"
        },
        {
         "ff" : "Sitka Text",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Sitka$Text"
        },
        {
         "ff" : "Sylfaen",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Sylfaen"
        },
        {
         "ff" : "Tahoma",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Tahoma"
        },
        {
         "ff" : "Times New Roman",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Times$New$Roman"
        },
        {
         "ff" : "Trebuchet MS",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Trebuchet$MS"
        },
        {
         "ff" : "Verdana",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Verdana"
        },
        {
         "ff" : "Yu Gothic",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Yu$Gothic"
        },
        {
         "ff" : "Yu Gothic Light",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Yu$Gothic$Light"
        },
        {
         "ff" : "Yu Gothic Medium",
         "fw" : "500",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Yu$Gothic$Medium"
        },
        {
         "ff" : "Yu Gothic UI",
         "fw" : "400",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Yu$Gothic$UI"
        },
        {
         "ff" : "Yu Gothic UI Light",
         "fw" : "300",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Yu$Gothic$UI$Light"
        },
        {
         "ff" : "Yu Gothic UI Semibold",
         "fw" : "600",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Yu$Gothic$UI$Semibold"
        },
        {
         "ff" : "Yu Gothic UI Semilight",
         "fw" : "350",
         "fs" : "normal",
         "url" : "\/PP.GetBinFont?FileName=Yu$Gothic$UI$Semilight"
        }
      ]
    }
  }
}


public static GetFontsResult GetFonts()
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetFonts();
    // Получение информации о доступных шрифтах
    var result = somClient.GetFonts(tGet);
    return result;
}


См. также:


[Специфические
 операции](Specific_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
