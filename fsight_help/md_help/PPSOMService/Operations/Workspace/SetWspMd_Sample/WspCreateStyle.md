# Создание стиля оформления

Создание стиля оформления
-


**


# Создание стиля оформления


Ниже приведён пример использования операции [SetWspMd](../SetWspMd.htm)
 для создания нового стиля на рабочем пространстве. В запросе передаётся
 шаблон, указывающий необходимость создания нового стиля. В ответе возвращаются
 настройки стиля.


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
  <CreateStyle>true</CreateStyle>  </action>
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
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<createdStyle>
  <Id>Style8</Id>  <pvt>1</pvt>  <fnt>Arial</fnt>  <fsz>10</fsz>  <fbl>0</fbl>  <fit>0</fit>  <fun>0</fun>  <fso>0</fso>  <fbc>#000000</fbc>  <fbt>0</fbt>  <lpc>#000000</lpc>  <lpt>0</lpt>  <lpst>Solid</lpst>  <lpw>0.25</lpw>  <lpcz>3</lpcz>  <pbc>Flat</pbc>  <pec>Flat</pec>  <bfc>#FFFFFF</bfc>  <bft>0</bft>  <bbp>Solid</bbp>  <bbc>#000000</bbc>  <bbt>0</bbt>  <sbfc>#000000</sbfc>  <sbft>0</sbft>  <sbp>None</sbp>  <sbc>#FFFFFF</sbc>  <sbt>0</sbt>  <tbc>#FFFFFF</tbc>  <tbt>100</tbt>  <tp>Over</tp>  <tah>Center</tah>  <tav>Center</tav>  <tml>0</tml>  <tmt>0</tmt>  <tmr>0</tmr>  <tmb>0</tmb>  <pt>0</pt>  <pah>Center</pah>  <pav>Center</pav>  <pml>0</pml>  <pmt>0</pmt>  <pmr>0</pmr>  <pmb>0</pmb>  <am>None</am>  <ww>BreakWords</ww>  <pp>0</pp>  <ps>0</ps>  <pas>0</pas>  </createdStyle>
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
         "CreateStyle" : "true"
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
     "id" : "CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG"
    },
   "meta" :
    {
     "createdStyle" :
      {
       "Id" : "Style8",
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
       "lpt" : "0",
       "lpst" : "Solid",
       "lpw" : "0.25",
       "lpcz" : "3",
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
      }
    }
  }
}


public static SetWspMdResult WspCreateStyle(string moniker)
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
                    CreateStyle = true
                }
            },
            meta = new WspMd()
        },
        tWsp = new WspId() { id = moniker }
    };
    // Создание стиля
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
