# Создание прямоугольника

Создание прямоугольника
-


**


# Создание прямоугольника


Ниже приведён пример использования операции [SetWspMd](../SetWspMd.htm)
 для создания новой фигуры - прямоугольника. В запросе передаётся шаблон,
 указывающий необходимость создания нового прямоугольника. В ответе возвращаются
 настройки созданного прямоугольника.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWspMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWsp xmlns="****">
  <id>ODAJEJFHDDAGGOAEECJPNHLHIAPINGLECINBIPHINMLDPIJF!M!S!WSPJHHOCLFHDDAGGOAEDBGIAODDEGJFOGKEGINPDEMCDDJJMFJD</id>  </tWsp>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>[![](../../../minus.gif)](../../../#)<action>
  <CreateRectangle>true</CreateRectangle>  </action>
  </pattern>
  <meta />
  </tArg>
  </SetWspMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetWspMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>ODAJEJFHDDAGGOAEECJPNHLHIAPINGLECINBIPHINMLDPIJF!M!S!WSPJHHOCLFHDDAGGOAEDBGIAODDEGJFOGKEGINPDEMCDDJJMFJD</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<createdRectangle>
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
  <x>0</x>  <y>0</y>  </pp>
[![](../../../minus.gif)](../../../#)<ppc>
  <x>0.5</x>  <y>0.5</y>  </ppc>
[![](../../../minus.gif)](../../../#)<sz>
  <width>30</width>  <height>20</height>  </sz>
  <a>0</a>  <txt />
  <tvo>0</tvo>  <tho>0</tho>  <gb>ScaleWithGroup</gb>  <c>OverShape</c>[![](../../../minus.gif)](../../../#)<t>
  <v />
  </t>
  <cs />
  <ai>511</ai>[![](../../../minus.gif)](../../../#)<ms>
  <width>0</width>  <height>0</height>  </ms>
  <lv>14</lv>[![](../../../minus.gif)](../../../#)<r>
  <left>-15</left>  <top>-10</top>  <width>30</width>  <height>20</height>  </r>
[![](../../../minus.gif)](../../../#)<rar>
  <left>15</left>  <top>10</top>  <width>0</width>  <height>0</height>  </rar>
  <v>1</v>  <st>Rectangle</st>  <ft>[]</ft>  </createdRectangle>
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
     "id" : "ODAJEJFHDDAGGOAEECJPNHLHIAPINGLECINBIPHINMLDPIJF!M!S!WSPJHHOCLFHDDAGGOAEDBGIAODDEGJFOGKEGINPDEMCDDJJMFJD"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "action" :
        {
         "CreateRectangle" : "true"
        }
      },
     "meta" : ""
    }
  }
}

### JSON-ответ:


{
 "SetWspMdResult" :
  {
   "id" :
    {
     "id" : "ODAJEJFHDDAGGOAEECJPNHLHIAPINGLECINBIPHINMLDPIJF!M!S!WSPJHHOCLFHDDAGGOAEDBGIAODDEGJFOGKEGINPDEMCDDJJMFJD"
    },
   "meta" :
    {
     "createdRectangle" :
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
         "x" : "0",
         "y" : "0"
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
         "left" : "-15",
         "top" : "-10",
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
       "st" : "Rectangle",
       "ft" : "[]"
      }
    }
  }
}


public static SetWspMdResult WspCreateRectangle(string moniker)
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
                    CreateRectangle = true
                }
            },
            meta = new WspMd()
        },
        tWsp = new WspId() { id = moniker },
    };
    // Создание прямоугольника
    var tResult = somClient.SetWspMd(tSet);
    return tResult;
}


См. также:


[SetWspMd:
 Операция](../SetWspMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
