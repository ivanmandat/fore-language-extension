# Получение информации о листах регламентного отчета: Операция GetPrxMd

Получение информации о листах регламентного отчета: Операция GetPrxMd
-


**


# Получение информации о листах регламентного отчета


Ниже приведен пример использования операции [GetPrxMd](../GetPrxMd.htm)
 для получения информации о всех листах регламентного отчета. В запросе
 передается моникёр открытого экземпляра регламентного отчета и шаблон,
 указывающий необходимость получить информацию о листах. В ответе приходит
 запрошенная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetPrxMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tPrx xmlns="****">
  <id>S1!M!S!P1</id>  </tPrx>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>[![](../../../minus.gif)](../../../#)<sheet>
  <pageSettings>true</pageSettings>  </sheet>
  <sheets>Get</sheets>  </pattern>
  </tArg>
  </GetPrxMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetPrxMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!P1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>REPORT_1</i>  <n>Регламентный отчет</n>  <k>6334</k>  <c>2562</c>  <p>6333</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../../minus.gif)](../../../#)<sheets>
  <active>0</active>[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>Лист1</id>  <n>Лист1</n>  <vis>1</vis>  <type>Table</type>  <isActive>1</isActive>[![](../../../minus.gif)](../../../#)<pageSettings>
[![](../../../minus.gif)](../../../#)<paperSize>
  <width>210000</width>  <height>297000</height>  <units>Mkm</units>  </paperSize>
[![](../../../minus.gif)](../../../#)<margins>
  <left>10000</left>  <top>10000</top>  <right>10000</right>  <bottom>10000</bottom>  <units>Mkm</units>  </margins>
  <paperFormat>A4</paperFormat>  <paperOrientation>Portrait</paperOrientation>  <centerHorizontal>0</centerHorizontal>  <centerVertical>0</centerVertical>  <printHyperlinks>0</printHyperlinks>  <blackAndWhite>0</blackAndWhite>  <printOrder>FromTopToBottom</printOrder>[![](../../../minus.gif)](../../../#)<scale>
  <value>1</value>  <fitToPages>0</fitToPages>  <pageWidth>-1</pageWidth>  <pageHeight>-1</pageHeight>  </scale>
  <startPageNumber>0</startPageNumber>  <useSheetPageCount>0</useSheetPageCount>  </pageSettings>
[![](../../../minus.gif)](../../../#)<dataChange>
  <isDataChanged>0</isDataChanged>  </dataChange>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>Документ1</id>  <n>Документ1</n>  <vis>1</vis>  <type>Document</type>  <isActive>0</isActive>[![](../../../minus.gif)](../../../#)<pageSettings>
[![](../../../minus.gif)](../../../#)<paperSize>
  <width>210060</width>  <height>296933</height>  <units>Mkm</units>  </paperSize>
[![](../../../minus.gif)](../../../#)<margins>
  <left>25400</left>  <top>25400</top>  <right>25400</right>  <bottom>25400</bottom>  <units>Mkm</units>  </margins>
  <paperFormat>A4</paperFormat>  <paperOrientation>Portrait</paperOrientation>  <centerHorizontal>0</centerHorizontal>  <centerVertical>0</centerVertical>  <printHyperlinks>0</printHyperlinks>  <blackAndWhite>0</blackAndWhite>  <printOrder>FromTopToBottom</printOrder>[![](../../../minus.gif)](../../../#)<scale>
  <value>1</value>  <fitToPages>0</fitToPages>  <pageWidth>-1</pageWidth>  <pageHeight>-1</pageHeight>  </scale>
  <startPageNumber>0</startPageNumber>  <useSheetPageCount>0</useSheetPageCount>  </pageSettings>
  </it>
  </its>
  </sheets>
[![](../../../minus.gif)](../../../#)<dataChange>
  <isDataChanged>0</isDataChanged>  </dataChange>
  </meta>
  </GetPrxMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxMd" :
  {
   "tPrx" :
    {
     "id" : "S1!M!S!P1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "sheet" :
        {
         "pageSettings" : "true"
        },
       "sheets" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "GetPrxMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!P1"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "0",
         "@hf" : "0",
         "i" : "REPORT_1",
         "n" : "Регламентный отчет",
         "k" : "6334",
         "c" : "2562",
         "p" : "6333",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        },
       "openArgs" : ""
      },
     "sheets" :
      {
       "active" : "0",
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "Лист1",
             "n" : "Лист1",
             "vis" : "1",
             "type" : "Table",
             "isActive" : "1",
             "pageSettings" :
              {
               "paperSize" :
                {
                 "width" : "210000",
                 "height" : "297000",
                 "units" : "Mkm"
                },
               "margins" :
                {
                 "left" : "10000",
                 "top" : "10000",
                 "right" : "10000",
                 "bottom" : "10000",
                 "units" : "Mkm"
                },
               "paperFormat" : "A4",
               "paperOrientation" : "Portrait",
               "centerHorizontal" : "0",
               "centerVertical" : "0",
               "printHyperlinks" : "0",
               "blackAndWhite" : "0",
               "printOrder" : "FromTopToBottom",
               "scale" :
                {
                 "value" : "1",
                 "fitToPages" : "0",
                 "pageWidth" : "-1",
                 "pageHeight" : "-1"
                },
               "startPageNumber" : "0",
               "useSheetPageCount" : "0"
              },
             "dataChange" :
              {
               "isDataChanged" : "0"
              }
            },
            {
             "k" : "2",
             "id" : "Документ1",
             "n" : "Документ1",
             "vis" : "1",
             "type" : "Document",
             "isActive" : "0",
             "pageSettings" :
              {
               "paperSize" :
                {
                 "width" : "210060",
                 "height" : "296933",
                 "units" : "Mkm"
                },
               "margins" :
                {
                 "left" : "25400",
                 "top" : "25400",
                 "right" : "25400",
                 "bottom" : "25400",
                 "units" : "Mkm"
                },
               "paperFormat" : "A4",
               "paperOrientation" : "Portrait",
               "centerHorizontal" : "0",
               "centerVertical" : "0",
               "printHyperlinks" : "0",
               "blackAndWhite" : "0",
               "printOrder" : "FromTopToBottom",
               "scale" :
                {
                 "value" : "1",
                 "fitToPages" : "0",
                 "pageWidth" : "-1",
                 "pageHeight" : "-1"
                },
               "startPageNumber" : "0",
               "useSheetPageCount" : "0"
              }
            }
          ]
        }
      },
     "dataChange" :
      {
       "isDataChanged" : "0"
      }
    }
  }
}


public static GetPrxMdResult GetPrxMd(PrxId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tArg = new GetPrxMd()
    {
        tArg = new GetPrxMdArg()
        {
            pattern = new PrxMdPattern()
            {
                sheets = ListOperation.Get,
                sheet = new PrxSheetPattern()
                {
                    pageSettings = true
                }
            }
        },
        tPrx = moniker
    };
    //Получение метаданных
    var result = somClient.GetPrxMd(tArg);
    return result;
}


См. также:


[GetPrxMd](../GetPrxMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
