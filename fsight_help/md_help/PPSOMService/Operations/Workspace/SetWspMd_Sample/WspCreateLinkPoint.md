# Создание точки излома линии связи

Создание точки излома линии связи
-


**


# Создание точки излома линии связи


Ниже приведён пример использования операции [SetWspMd](../SetWspMd.htm)
 для создания точки излома линии связи. В запросе передаются параметры
 создания точки. В ответе возвращается информация о фигурах рабочего пространства.
 Для линии связи будет получен список всех точек, через которые она проходит
 - поле pnts.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWspMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWsp xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </tWsp>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>[![](../../../minus.gif)](../../../#)<action>
  <InsertLinkPoint>true</InsertLinkPoint>  </action>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<InsertLinkPoint>
  <shapeId>Shape4</shapeId>  <index>1</index>[![](../../../minus.gif)](../../../#)<point>
  <x>10</x>  <y>20</y>  </point>
  </InsertLinkPoint>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <getShapes2>true</getShapes2>  </metaGet>
  </tArg>
  </SetWspMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetWspMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<shapes2>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<cld>
  <its />
  </cld>
  <Id>Shape1</Id>[![](../../../minus.gif)](../../../#)<s>
  <Id>Style2</Id>  <pvt>1</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#000000</lpc>  <lpt>100</lpt>  <lpst>Solid</lpst>  <lpw>0.25</lpw>  <lpcz>3</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>None</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Bottom</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Near</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </s>
[![](../../../minus.gif)](../../../#)<ss>
  <Id>Selection</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#000000</lpc>  <lpt>100</lpt>  <lpst>Solid</lpst>  <lpw>0.25</lpw>  <lpcz>3</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>None</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Bottom</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Near</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </ss>
  <p W="**32**" H="**32**">iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvAAADrwBlbxySQAAAehJREFUWEftl8FtwkAQRSmBDoy8MlwpISVQAI4pgRJcAS7BR6NcOICVI8co8SElUIIPAeVI9s96CZjZwRBASpQvPUHwzrwR2F6n9Z9fm15SPASTt2U3KbZ4xd/VodsmSF5HVlwHn+N4tfS6MeJixYnrYN1VBvGS93aQFHFTcR0zSBGjT9WyWay4O3krucZno/s0HgQn09XEdXTfRidrL3npdCdFyja5FN0PfSuFO2oRrvzFkE6gH/8Uta9+nfmj9VSt8N4ZlT9uCT2IysPYm0VtO8h5V4ERlzOvvclUDPFmqragUvHZDbAjLO0gOC5djkZsLj8r1pRWfOEAB6Tec0S/oxnk+05oxZ+Z19GStC7dB+ucYaQcabCI+lhvT6z1U9DXzUWxBeudYWRO/DxcomYz9ZecyAWJXOFEEqjhJBIkcoWTSKCGk0iQyBVOIoEaTiJBIlc4iQRqOIkEiVzhJBKo4SQSJHKFk0ighpNIkMgVTiKBGk4iQSJXOIkEajiJBIlcwa1WN07NHsBL90ENJznC7AkpbtUkOhVsPtiETg2CtUeyfSDWmxI2J2p8bjCIPw/HZntuPoDZfv3xxWIueFCpD4LP62I8eFDBraLy4QAb0eEAtCENaMG9ouYRPWB+ZOo+/xX9wbRaXy856gGC0IrxAAAAAElFTkSuQmCC</p>  <tc />
[![](../../../minus.gif)](../../../#)<pp>
  <x>-84.55207061767578</x>  <y>-27.96145439147949</y>  </pp>
[![](../../../minus.gif)](../../../#)<ppc>
  <x>0.5</x>  <y>0.5</y>  </ppc>
[![](../../../minus.gif)](../../../#)<sz>
  <width>29.10416412353516</width>  <height>24.07708168029785</height>  </sz>
  <a>0</a>  <txt>Экспресс-отчет</txt>  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../../minus.gif)](../../../#)<t>
  <v />
  </t>
  <cs />
  <ai>511</ai>[![](../../../minus.gif)](../../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../../minus.gif)](../../../#)<r>
  <left>-99.10415649414063</left>  <top>-39.99999618530273</top>  <width>29.10416412353516</width>  <height>24.07708168029785</height>  </r>
[![](../../../minus.gif)](../../../#)<rar>
  <left>1.865518569946289</left>  <top>14.30127906799316</top>  <width>25.37312698364258</width>  <height>3.941190719604492</height>  </rar>
  <v>1</v>  <st>Rectangle</st>  </it>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<cld>
  <its />
  </cld>
  <Id>Shape2</Id>[![](../../../minus.gif)](../../../#)<s>
  <Id>Обычный</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </s>
[![](../../../minus.gif)](../../../#)<ss>
  <Id>Selection</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </ss>
  <p />
  <tc />
[![](../../../minus.gif)](../../../#)<pp>
  <x>-34.99999618530273</x>  <y>-30.00000381469727</y>  </pp>
[![](../../../minus.gif)](../../../#)<ppc>
  <x>0.5</x>  <y>0.5</y>  </ppc>
[![](../../../minus.gif)](../../../#)<sz>
  <width>30</width>  <height>20</height>  </sz>
  <a>0</a>  <txt />
  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../../minus.gif)](../../../#)<t>
  <v />
  </t>
[![](../../../minus.gif)](../../../#)<cs>
[![](../../../minus.gif)](../../../#)<it>
  <Key>2</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>0</index>  <shapeId>Shape4</shapeId>  </Value>
  </it>
  </cs>
  <ai>511</ai>[![](../../../minus.gif)](../../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../../minus.gif)](../../../#)<r>
  <left>-49.99999618530273</left>  <top>-40.00000381469727</top>  <width>30</width>  <height>20</height>  </r>
[![](../../../minus.gif)](../../../#)<rar>
  <left>15</left>  <top>10</top>  <width>0</width>  <height>0</height>  </rar>
  <v>1</v>  <st>Rectangle</st>  </it>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<cld>
  <its />
  </cld>
  <Id>Shape3</Id>[![](../../../minus.gif)](../../../#)<s>
  <Id>Обычный</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </s>
[![](../../../minus.gif)](../../../#)<ss>
  <Id>Selection</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </ss>
  <p />
  <tc />
[![](../../../minus.gif)](../../../#)<pp>
  <x>4.999993324279785</x>  <y>-9.999996185302734</y>  </pp>
[![](../../../minus.gif)](../../../#)<ppc>
  <x>0.5</x>  <y>0.5</y>  </ppc>
[![](../../../minus.gif)](../../../#)<sz>
  <width>30</width>  <height>20</height>  </sz>
  <a>0</a>  <txt />
  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../../minus.gif)](../../../#)<t>
  <v />
  </t>
[![](../../../minus.gif)](../../../#)<cs>
[![](../../../minus.gif)](../../../#)<it>
  <Key>3</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>1</index>  <shapeId>Shape4</shapeId>  </Value>
  </it>
  </cs>
  <ai>511</ai>[![](../../../minus.gif)](../../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../../minus.gif)](../../../#)<r>
  <left>-10.00000667572021</left>  <top>-19.99999618530273</top>  <width>30</width>  <height>20</height>  </r>
[![](../../../minus.gif)](../../../#)<rar>
  <left>15</left>  <top>10</top>  <width>0</width>  <height>0</height>  </rar>
  <v>1</v>  <st>Ellipse</st>  </it>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<cld>
  <its />
  </cld>
  <Id>Shape4</Id>[![](../../../minus.gif)](../../../#)<s>
  <Id>Обычный</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </s>
[![](../../../minus.gif)](../../../#)<ss>
  <Id>Selection</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </ss>
  <p />
  <tc />
[![](../../../minus.gif)](../../../#)<pp>
  <x>-4.999998092651367</x>  <y>-5.000001907348633</y>  </pp>
[![](../../../minus.gif)](../../../#)<ppc>
  <x>0</x>  <y>0</y>  </ppc>
[![](../../../minus.gif)](../../../#)<sz>
  <width>29.99999618530273</width>  <height>50.00000381469727</height>  </sz>
  <a>50.1944465637207</a>  <txt />
  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../../minus.gif)](../../../#)<t>
  <v />
  </t>
[![](../../../minus.gif)](../../../#)<cs>
[![](../../../minus.gif)](../../../#)<it>
  <Key>0</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>2</index>  <shapeId>Shape2</shapeId>  </Value>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <Key>1</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>3</index>  <shapeId>Shape3</shapeId>  </Value>
  </it>
  </cs>
  <ai>511</ai>[![](../../../minus.gif)](../../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../../minus.gif)](../../../#)<r>
  <left>-33.80829620361328</left>  <top>-9.481288909912109</top>  <width>57.61660003662109</width>  <height>8.962566375732422</height>  </r>
[![](../../../minus.gif)](../../../#)<rar>
  <left>-4.999998092651367</left>  <top>-5.000001907348633</top>  <width>0</width>  <height>0</height>  </rar>
  <v>1</v>  <st>Link</st>  </it>
  </its>
  </shapes2>
[![](../../../minus.gif)](../../../#)<links>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<cld>
  <its />
  </cld>
  <Id>Shape4</Id>[![](../../../minus.gif)](../../../#)<s>
  <Id>Обычный</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </s>
[![](../../../minus.gif)](../../../#)<ss>
  <Id>Selection</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </ss>
  <p />
  <tc />
[![](../../../minus.gif)](../../../#)<pp>
  <x>-4.999998092651367</x>  <y>-5.000001907348633</y>  </pp>
[![](../../../minus.gif)](../../../#)<ppc>
  <x>0</x>  <y>0</y>  </ppc>
[![](../../../minus.gif)](../../../#)<sz>
  <width>29.99999618530273</width>  <height>50.00000381469727</height>  </sz>
  <a>50.1944465637207</a>  <txt />
  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../../minus.gif)](../../../#)<t>
  <v />
  </t>
[![](../../../minus.gif)](../../../#)<cs>
[![](../../../minus.gif)](../../../#)<it>
  <Key>0</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>2</index>  <shapeId>Shape2</shapeId>  </Value>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <Key>1</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>3</index>  <shapeId>Shape3</shapeId>  </Value>
  </it>
  </cs>
  <ai>511</ai>[![](../../../minus.gif)](../../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../../minus.gif)](../../../#)<r>
  <left>-33.80829620361328</left>  <top>-9.481288909912109</top>  <width>57.61660003662109</width>  <height>8.962566375732422</height>  </r>
[![](../../../minus.gif)](../../../#)<rar>
  <left>-4.999998092651367</left>  <top>-5.000001907348633</top>  <width>0</width>  <height>0</height>  </rar>
  <v>1</v>  <st>Link</st>  <fpa>1</fpa>  <lpa>1</lpa>[![](../../../minus.gif)](../../../#)<fp>
  <x>-19.99999618530273</x>  <y>-30.00000381469727</y>  </fp>
[![](../../../minus.gif)](../../../#)<lp>
  <x>4.999993324279785</x>  <y>3.814697265625e-06</y>  </lp>
[![](../../../minus.gif)](../../../#)<pnts>
[![](../../../minus.gif)](../../../#)<it>
  <x>-19.99999618530273</x>  <y>-30.00000381469727</y>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <x>10</x>  <y>20</y>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <x>4.999993324279785</x>  <y>3.814697265625e-06</y>  </it>
  </pnts>
  </it>
  </its>
  </links>
[![](../../../minus.gif)](../../../#)<ZOrderShapeMap>
[![](../../../minus.gif)](../../../#)<it>
  <Key>0</Key>  <Value>Shape1</Value>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <Key>1</Key>  <Value>Shape3</Value>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <Key>2</Key>  <Value>Shape2</Value>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <Key>3</Key>  <Value>Shape4</Value>  </it>
  </ZOrderShapeMap>
  </meta>
  </SetWspMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetWspMd" :
  {
   "tWsp" :
    {
     "id" : "CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "action" :
        {
         "InsertLinkPoint" : "true"
        }
      },
     "meta" :
      {
       "InsertLinkPoint" :
        {
         "shapeId" : "Shape4",
         "index" : "1",
         "point" :
          {
           "x" : "10",
           "y" : "20"
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "getShapes2" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetWspMdResult" :
  {
   "id" :
    {
     "id" : "CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG"
    },
   "meta" :
    {
     "shapes2" :
      {
       "its" :
        {
         "it" :
          [
            {
             "cld" :
              {
               "its" : ""
              },
             "Id" : "Shape1",
             "s" :
              {
               "Id" : "Style2",
               "pvt" : "1",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#000000",
               "lpt" : "100",
               "lpst" : "Solid",
               "lpw" : "0.25",
               "lpcz" : "3",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "None",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Bottom",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Near",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "ss" :
              {
               "Id" : "Selection",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#000000",
               "lpt" : "100",
               "lpst" : "Solid",
               "lpw" : "0.25",
               "lpcz" : "3",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "None",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Bottom",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Near",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "p" :
              {
               "@W" : "32",
               "@H" : "32",
               "$" : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC\/xhBQAAAAlwSFlzAAAOvAAADrwBlbxySQAAAehJREFUWEftl8FtwkAQRSmBDoy8MlwpISVQAI4pgRJcAS7BR6NcOICVI8co8SElUIIPAeVI9s96CZjZwRBASpQvPUHwzrwR2F6n9Z9fm15SPASTt2U3KbZ4xd\/VodsmSF5HVlwHn+N4tfS6MeJixYnrYN1VBvGS93aQFHFTcR0zSBGjT9WyWay4O3krucZno\/s0HgQn09XEdXTfRidrL3npdCdFyja5FN0PfSuFO2oRrvzFkE6gH\/8Uta9+nfmj9VSt8N4ZlT9uCT2IysPYm0VtO8h5V4ERlzOvvclUDPFmqragUvHZDbAjLO0gOC5djkZsLj8r1pRWfOEAB6Tec0S\/oxnk+05oxZ+Z19GStC7dB+ucYaQcabCI+lhvT6z1U9DXzUWxBeudYWRO\/DxcomYz9ZecyAWJXOFEEqjhJBIkcoWTSKCGk0iQyBVOIoEaTiJBIlc4iQRqOIkEiVzhJBKo4SQSJHKFk0ighpNIkMgVTiKBGk4iQSJXOIkEajiJBIlcwa1WN07NHsBL90ENJznC7AkpbtUkOhVsPtiETg2CtUeyfSDWmxI2J2p8bjCIPw\/HZntuPoDZfv3xxWIueFCpD4LP62I8eFDBraLy4QAb0eEAtCENaMG9ouYRPWB+ZOo+\/xX9wbRaXy856gGC0IrxAAAAAElFTkSuQmCC"
              },
             "tc" : "",
             "pp" :
              {
               "x" : "-84.55207061767578",
               "y" : "-27.96145439147949"
              },
             "ppc" :
              {
               "x" : "0.5",
               "y" : "0.5"
              },
             "sz" :
              {
               "width" : "29.10416412353516",
               "height" : "24.07708168029785"
              },
             "a" : "0",
             "txt" : "Экспресс-отчет",
             "tvo" : "0",
             "tho" : "0",
             "gb" : "ScaleWithGroup",
             "c" : "OverShape",
             "t" :
              {
               "v" : ""
              },
             "cs" : "",
             "ai" : "511",
             "ms" :
              {
               "width" : "0",
               "height" : "0"
              },
             "lv" : "14",
             "r" :
              {
               "left" : "-99.10415649414063",
               "top" : "-39.99999618530273",
               "width" : "29.10416412353516",
               "height" : "24.07708168029785"
              },
             "rar" :
              {
               "left" : "1.865518569946289",
               "top" : "14.30127906799316",
               "width" : "25.37312698364258",
               "height" : "3.941190719604492"
              },
             "v" : "1",
             "st" : "Rectangle"
            },
            {
             "cld" :
              {
               "its" : ""
              },
             "Id" : "Shape2",
             "s" :
              {
               "Id" : "Обычный",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#8B9097",
               "lpt" : "0",
               "lpst" : "Solid",
               "lpw" : "0.3533568978309631",
               "lpcz" : "2",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "Solid",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Over",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Center",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "ss" :
              {
               "Id" : "Selection",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#8B9097",
               "lpt" : "0",
               "lpst" : "Solid",
               "lpw" : "0.3533568978309631",
               "lpcz" : "2",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "Solid",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Over",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Center",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "p" : "",
             "tc" : "",
             "pp" :
              {
               "x" : "-34.99999618530273",
               "y" : "-30.00000381469727"
              },
             "ppc" :
              {
               "x" : "0.5",
               "y" : "0.5"
              },
             "sz" :
              {
               "width" : "30",
               "height" : "20"
              },
             "a" : "0",
             "txt" : "",
             "tvo" : "0",
             "tho" : "0",
             "gb" : "ScaleWithGroup",
             "c" : "OverShape",
             "t" :
              {
               "v" : ""
              },
             "cs" :
              {
               "it" :
                {
                 "Key" : "2",
                 "Value" :
                  {
                   "index" : "0",
                   "shapeId" : "Shape4"
                  }
                }
              },
             "ai" : "511",
             "ms" :
              {
               "width" : "0",
               "height" : "0"
              },
             "lv" : "14",
             "r" :
              {
               "left" : "-49.99999618530273",
               "top" : "-40.00000381469727",
               "width" : "30",
               "height" : "20"
              },
             "rar" :
              {
               "left" : "15",
               "top" : "10",
               "width" : "0",
               "height" : "0"
              },
             "v" : "1",
             "st" : "Rectangle"
            },
            {
             "cld" :
              {
               "its" : ""
              },
             "Id" : "Shape3",
             "s" :
              {
               "Id" : "Обычный",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#8B9097",
               "lpt" : "0",
               "lpst" : "Solid",
               "lpw" : "0.3533568978309631",
               "lpcz" : "2",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "Solid",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Over",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Center",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "ss" :
              {
               "Id" : "Selection",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#8B9097",
               "lpt" : "0",
               "lpst" : "Solid",
               "lpw" : "0.3533568978309631",
               "lpcz" : "2",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "Solid",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Over",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Center",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "p" : "",
             "tc" : "",
             "pp" :
              {
               "x" : "4.999993324279785",
               "y" : "-9.999996185302734"
              },
             "ppc" :
              {
               "x" : "0.5",
               "y" : "0.5"
              },
             "sz" :
              {
               "width" : "30",
               "height" : "20"
              },
             "a" : "0",
             "txt" : "",
             "tvo" : "0",
             "tho" : "0",
             "gb" : "ScaleWithGroup",
             "c" : "OverShape",
             "t" :
              {
               "v" : ""
              },
             "cs" :
              {
               "it" :
                {
                 "Key" : "3",
                 "Value" :
                  {
                   "index" : "1",
                   "shapeId" : "Shape4"
                  }
                }
              },
             "ai" : "511",
             "ms" :
              {
               "width" : "0",
               "height" : "0"
              },
             "lv" : "14",
             "r" :
              {
               "left" : "-10.00000667572021",
               "top" : "-19.99999618530273",
               "width" : "30",
               "height" : "20"
              },
             "rar" :
              {
               "left" : "15",
               "top" : "10",
               "width" : "0",
               "height" : "0"
              },
             "v" : "1",
             "st" : "Ellipse"
            },
            {
             "cld" :
              {
               "its" : ""
              },
             "Id" : "Shape4",
             "s" :
              {
               "Id" : "Обычный",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#8B9097",
               "lpt" : "0",
               "lpst" : "Solid",
               "lpw" : "0.3533568978309631",
               "lpcz" : "2",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "Solid",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Over",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Center",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "ss" :
              {
               "Id" : "Selection",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#8B9097",
               "lpt" : "0",
               "lpst" : "Solid",
               "lpw" : "0.3533568978309631",
               "lpcz" : "2",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "Solid",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Over",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Center",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "p" : "",
             "tc" : "",
             "pp" :
              {
               "x" : "-4.999998092651367",
               "y" : "-5.000001907348633"
              },
             "ppc" :
              {
               "x" : "0",
               "y" : "0"
              },
             "sz" :
              {
               "width" : "29.99999618530273",
               "height" : "50.00000381469727"
              },
             "a" : "50.1944465637207",
             "txt" : "",
             "tvo" : "0",
             "tho" : "0",
             "gb" : "ScaleWithGroup",
             "c" : "OverShape",
             "t" :
              {
               "v" : ""
              },
             "cs" :
              {
               "it" :
                [
                  {
                   "Key" : "0",
                   "Value" :
                    {
                     "index" : "2",
                     "shapeId" : "Shape2"
                    }
                  },
                  {
                   "Key" : "1",
                   "Value" :
                    {
                     "index" : "3",
                     "shapeId" : "Shape3"
                    }
                  }
                ]
              },
             "ai" : "511",
             "ms" :
              {
               "width" : "0",
               "height" : "0"
              },
             "lv" : "14",
             "r" :
              {
               "left" : "-33.80829620361328",
               "top" : "-9.481288909912109",
               "width" : "57.61660003662109",
               "height" : "8.962566375732422"
              },
             "rar" :
              {
               "left" : "-4.999998092651367",
               "top" : "-5.000001907348633",
               "width" : "0",
               "height" : "0"
              },
             "v" : "1",
             "st" : "Link"
            }
          ]
        }
      },
     "links" :
      {
       "its" :
        {
         "it" :
          [
            {
             "cld" :
              {
               "its" : ""
              },
             "Id" : "Shape4",
             "s" :
              {
               "Id" : "Обычный",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#8B9097",
               "lpt" : "0",
               "lpst" : "Solid",
               "lpw" : "0.3533568978309631",
               "lpcz" : "2",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "Solid",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Over",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Center",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "ss" :
              {
               "Id" : "Selection",
               "pvt" : "0",
               "fnt" : "Arial",
               "fsz" : "10",
               "fbl" : "0",
               "fit" : "0",
               "fun" : "0",
               "fso" : "0",
               "fbc" : "#000000",
               "fbt" : "0",
               "lpc" : "#8B9097",
               "lpt" : "0",
               "lpst" : "Solid",
               "lpw" : "0.3533568978309631",
               "lpcz" : "2",
               "pbc" : "Flat",
               "pec" : "Flat",
               "bfc" : "#FFFFFF",
               "bft" : "0",
               "bbp" : "Solid",
               "bbc" : "#000000",
               "bbt" : "0",
               "sbfc" : "#000000",
               "sbft" : "0",
               "sbp" : "None",
               "sbc" : "#FFFFFF",
               "sbt" : "0",
               "tbc" : "#FFFFFF",
               "tbt" : "100",
               "tp" : "Over",
               "tah" : "Center",
               "tav" : "Center",
               "tml" : "0",
               "tmt" : "0",
               "tmr" : "0",
               "tmb" : "0",
               "pt" : "0",
               "pah" : "Center",
               "pav" : "Center",
               "pml" : "0",
               "pmt" : "0",
               "pmr" : "0",
               "pmb" : "0",
               "am" : "None",
               "ww" : "BreakWords",
               "pp" : "0",
               "ps" : "0",
               "pas" : "0"
              },
             "p" : "",
             "tc" : "",
             "pp" :
              {
               "x" : "-4.999998092651367",
               "y" : "-5.000001907348633"
              },
             "ppc" :
              {
               "x" : "0",
               "y" : "0"
              },
             "sz" :
              {
               "width" : "29.99999618530273",
               "height" : "50.00000381469727"
              },
             "a" : "50.1944465637207",
             "txt" : "",
             "tvo" : "0",
             "tho" : "0",
             "gb" : "ScaleWithGroup",
             "c" : "OverShape",
             "t" :
              {
               "v" : ""
              },
             "cs" :
              {
               "it" :
                [
                  {
                   "Key" : "0",
                   "Value" :
                    {
                     "index" : "2",
                     "shapeId" : "Shape2"
                    }
                  },
                  {
                   "Key" : "1",
                   "Value" :
                    {
                     "index" : "3",
                     "shapeId" : "Shape3"
                    }
                  }
                ]
              },
             "ai" : "511",
             "ms" :
              {
               "width" : "0",
               "height" : "0"
              },
             "lv" : "14",
             "r" :
              {
               "left" : "-33.80829620361328",
               "top" : "-9.481288909912109",
               "width" : "57.61660003662109",
               "height" : "8.962566375732422"
              },
             "rar" :
              {
               "left" : "-4.999998092651367",
               "top" : "-5.000001907348633",
               "width" : "0",
               "height" : "0"
              },
             "v" : "1",
             "st" : "Link",
             "fpa" : "1",
             "lpa" : "1",
             "fp" :
              {
               "x" : "-19.99999618530273",
               "y" : "-30.00000381469727"
              },
             "lp" :
              {
               "x" : "4.999993324279785",
               "y" : "3.814697265625e-06"
              },
             "pnts" :
              {
               "it" :
                [
                  {
                   "x" : "-19.99999618530273",
                   "y" : "-30.00000381469727"
                  },
                  {
                   "x" : "10",
                   "y" : "20"
                  },
                  {
                   "x" : "4.999993324279785",
                   "y" : "3.814697265625e-06"
                  }
                ]
              }
            }
          ]
        }
      },
     "ZOrderShapeMap" :
      {
       "it" :
        [
          {
           "Key" : "0",
           "Value" : "Shape1"
          },
          {
           "Key" : "1",
           "Value" : "Shape3"
          },
          {
           "Key" : "2",
           "Value" : "Shape2"
          },
          {
           "Key" : "3",
           "Value" : "Shape4"
          }
        ]
      }
    }
  }
}


public static SetWspMdResult WspCreateLinkPoint(string moniker, string linkId, int indexPoint, PointF newPoint)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetWspMd()
    {
        tArg = new SetWspMdArg()
        {
            pattern = new WspMdPattern()
            {
                action = new IWrspWorkspaceAction()
                {
                    InsertLinkPoint = true
                }
            },
            meta = new WspMd()
            {
                InsertLinkPoint = new WspInsertPointArgs()
                {
                    shapeId = linkId,
                    index = indexPoint,
                    point = newPoint
                }
            },
            metaGet = new WspMdPattern()
            {
                getShapes2 = true
            }
        },
        tWsp = new WspId() { id = moniker }
    };
    // Добавление точки излома линии связи
    var tResult = somClient.SetWspMd(tSet);
    return tResult;
}


См. также:


[Работа
 с рабочим пространством](../Wsp_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
