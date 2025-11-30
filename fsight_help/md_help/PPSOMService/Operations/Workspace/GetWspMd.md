# GetWspMd: Операция

GetWspMd: Операция
-


**


# GetWspMd


## Синтаксис


GetWspMdResult GetWspMd(WspId tWsp, GetWspMdArg
 tArg)


## Параметры


tWsp. Моникёр
 открытого экземпляра рабочего пространства.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetWspMd извлекает
 метаданные рабочего пространства.


## Комментарии


Для выполнения операции укажите в поле tWsp
 моникёр экземпляра рабочего пространства, а в поле tArg.pattern
 шаблон, в соответствии с которым будут извлекаться метаданные. Моникёр
 может быть получен при выполнении операции [OpenWsp](OpenWsp.htm).


В поле tArg.pattern указывается
 шаблон для получения информации о различных фигурах рабочего пространства.
 Также можно определить параметры экспорта рабочего пространства в файл.
 Результатом работы операции будут запрошенные метаданные.


## Пример


Ниже приведён пример получения метаданных рабочего пространства. В запросе
 передаётся моникёр открытого экземпляра рабочего пространства. В ответе
 возвращаются полученные метаданные.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetWspMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tWsp xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </tWsp>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <getShapes2>true</getShapes2>  </pattern>
  </tArg>
  </GetWspMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetWspMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<shapes2>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<cld>
  <its />
  </cld>
  <Id>Shape1</Id>[![](../../minus.gif)](../../#)<s>
  <Id>Style2</Id>  <pvt>1</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#000000</lpc>  <lpt>100</lpt>  <lpst>Solid</lpst>  <lpw>0.25</lpw>  <lpcz>3</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>None</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Bottom</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Near</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </s>
[![](../../minus.gif)](../../#)<ss>
  <Id>Selection</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#000000</lpc>  <lpt>100</lpt>  <lpst>Solid</lpst>  <lpw>0.25</lpw>  <lpcz>3</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>None</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Bottom</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Near</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </ss>
  <p W="**32**" H="**32**">iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvAAADrwBlbxySQAAAehJREFUWEftl8FtwkAQRSmBDoy8MlwpISVQAI4pgRJcAS7BR6NcOICVI8co8SElUIIPAeVI9s96CZjZwRBASpQvPUHwzrwR2F6n9Z9fm15SPASTt2U3KbZ4xd/VodsmSF5HVlwHn+N4tfS6MeJixYnrYN1VBvGS93aQFHFTcR0zSBGjT9WyWay4O3krucZno/s0HgQn09XEdXTfRidrL3npdCdFyja5FN0PfSuFO2oRrvzFkE6gH/8Uta9+nfmj9VSt8N4ZlT9uCT2IysPYm0VtO8h5V4ERlzOvvclUDPFmqragUvHZDbAjLO0gOC5djkZsLj8r1pRWfOEAB6Tec0S/oxnk+05oxZ+Z19GStC7dB+ucYaQcabCI+lhvT6z1U9DXzUWxBeudYWRO/DxcomYz9ZecyAWJXOFEEqjhJBIkcoWTSKCGk0iQyBVOIoEaTiJBIlc4iQRqOIkEiVzhJBKo4SQSJHKFk0ighpNIkMgVTiKBGk4iQSJXOIkEajiJBIlcwa1WN07NHsBL90ENJznC7AkpbtUkOhVsPtiETg2CtUeyfSDWmxI2J2p8bjCIPw/HZntuPoDZfv3xxWIueFCpD4LP62I8eFDBraLy4QAb0eEAtCENaMG9ouYRPWB+ZOo+/xX9wbRaXy856gGC0IrxAAAAAElFTkSuQmCC</p>  <tc />
[![](../../minus.gif)](../../#)<pp>
  <x>-84.55207061767578</x>  <y>-27.96145439147949</y>  </pp>
[![](../../minus.gif)](../../#)<ppc>
  <x>0.5</x>  <y>0.5</y>  </ppc>
[![](../../minus.gif)](../../#)<sz>
  <width>29.10416412353516</width>  <height>24.07708168029785</height>  </sz>
  <a>0</a>  <txt>Экспресс-отчет</txt>  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../minus.gif)](../../#)<t>
  <v />
  </t>
  <cs />
  <ai>511</ai>[![](../../minus.gif)](../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../minus.gif)](../../#)<r>
  <left>-99.10415649414063</left>  <top>-39.99999618530273</top>  <width>29.10416412353516</width>  <height>24.07708168029785</height>  </r>
[![](../../minus.gif)](../../#)<rar>
  <left>1.865518569946289</left>  <top>14.30127906799316</top>  <width>25.37312698364258</width>  <height>3.941190719604492</height>  </rar>
  <v>1</v>  <st>Rectangle</st>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<cld>
  <its />
  </cld>
  <Id>Shape2</Id>[![](../../minus.gif)](../../#)<s>
  <Id>Обычный</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </s>
[![](../../minus.gif)](../../#)<ss>
  <Id>Selection</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </ss>
  <p />
  <tc />
[![](../../minus.gif)](../../#)<pp>
  <x>-34.99999618530273</x>  <y>-30.00000381469727</y>  </pp>
[![](../../minus.gif)](../../#)<ppc>
  <x>0.5</x>  <y>0.5</y>  </ppc>
[![](../../minus.gif)](../../#)<sz>
  <width>30</width>  <height>20</height>  </sz>
  <a>0</a>  <txt />
  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../minus.gif)](../../#)<t>
  <v />
  </t>
  <cs />
  <ai>511</ai>[![](../../minus.gif)](../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../minus.gif)](../../#)<r>
  <left>-49.99999618530273</left>  <top>-40.00000381469727</top>  <width>30</width>  <height>20</height>  </r>
[![](../../minus.gif)](../../#)<rar>
  <left>15</left>  <top>10</top>  <width>0</width>  <height>0</height>  </rar>
  <v>1</v>  <st>Rectangle</st>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<cld>
  <its />
  </cld>
  <Id>Shape3</Id>[![](../../minus.gif)](../../#)<s>
  <Id>Обычный</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </s>
[![](../../minus.gif)](../../#)<ss>
  <Id>Selection</Id>  <pvt>0</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#8B9097</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.3533568978309631</lpw>  <lpcz>2</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </ss>
  <p />
  <tc />
[![](../../minus.gif)](../../#)<pp>
  <x>4.999993324279785</x>  <y>-9.999996185302734</y>  </pp>
[![](../../minus.gif)](../../#)<ppc>
  <x>0.5</x>  <y>0.5</y>  </ppc>
[![](../../minus.gif)](../../#)<sz>
  <width>30</width>  <height>20</height>  </sz>
  <a>0</a>  <txt />
  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../minus.gif)](../../#)<t>
  <v />
  </t>
  <cs />
  <ai>511</ai>[![](../../minus.gif)](../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../minus.gif)](../../#)<r>
  <left>-10.00000667572021</left>  <top>-19.99999618530273</top>  <width>30</width>  <height>20</height>  </r>
[![](../../minus.gif)](../../#)<rar>
  <left>15</left>  <top>10</top>  <width>0</width>  <height>0</height>  </rar>
  <v>1</v>  <st>Ellipse</st>  </it>
  </its>
  </shapes2>
[![](../../minus.gif)](../../#)<links>
  <its />
  </links>
[![](../../minus.gif)](../../#)<ZOrderShapeMap>
[![](../../minus.gif)](../../#)<it>
  <Key>0</Key>  <Value>Shape1</Value>  </it>
[![](../../minus.gif)](../../#)<it>
  <Key>1</Key>  <Value>Shape3</Value>  </it>
[![](../../minus.gif)](../../#)<it>
  <Key>2</Key>  <Value>Shape2</Value>  </it>
  </ZOrderShapeMap>
  </meta>
  </GetWspMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetWspMd" :
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
       "getShapes2" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetWspMdResult" :
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
            }
          ]
        }
      },
     "links" :
      {
       "its" : ""
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
          }
        ]
      }
    }
  }
}


public static GetWspMdResult GetWorkspace(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetWspMd()
    {
        tArg = new GetWspMdArg()
        {
            pattern = new WspMdPattern()
            {
                getShapes2 = true
            }
        },
        tWsp = new WspId() { id = moniker }
    };
    // Получение метаданных рабочего пространства
    var tResult = somClient.GetWspMd(tGet);
    return tResult;
}


См. также:


[Работа с
 рабочим пространством](Wsp_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
