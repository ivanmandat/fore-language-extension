# Открытие с извлечением метаданных: Операция OpenAlg

Открытие с извлечением метаданных: Операция OpenAlg
-


**


# Открытие с извлечением метаданных


Ниже приведен пример использования операции [OpenAlg](../OpenAlg.htm)
 для открытия блока расчёта и получения его метаданных. В запросе передается
 моникёр объекта, являющегося блоком расчёта в репозитории. В ответе приходит
 моникёр открытого экземпляра и запрошенные метаданные.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenAlg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>S1!M!231308</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<args>
  <openForEdit>true</openForEdit>  </args>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>[![](../../../minus.gif)](../../../#)<calcBlock>
[![](../../../minus.gif)](../../../#)<dest>
  <stub>true</stub>  <linksOperation>Get</linksOperation>  </dest>
  </calcBlock>
  </metaGet>
  </tArg>
  </OpenAlg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenAlgResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!C2</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>CALC_BLOCK</i>  <n>Блок расчёта</n>  <k>231308</k>  <c>1709825</c>  <p>231226</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<calcObject>
  <k>231308</k>  <id>CALC_BLOCK</id>  <n>Блок расчёта</n>  <vis>1</vis>  <type>CalcBlock</type>[![](../../../minus.gif)](../../../#)<calcBlock>
[![](../../../minus.gif)](../../../#)<dest>
  <k>231304</k>  <id>OBJ231297</id>  <n>Куб-приёмник</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<desc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>OBJ231297</i>  <n>Куб-приёмник</n>  <k>231304</k>  <c>1281</c>  <p>231293</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </desc>
  <hasCalendar>1</hasCalendar>  <useCalendarAsStubDimension>0</useCalendarAsStubDimension>[![](../../../minus.gif)](../../../#)<links>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>[![](../../../minus.gif)](../../../#)<left>
  <dimId>FACTS</dimId>  <attrId>KEY</attrId>  <ignoreNulls>0</ignoreNulls>  </left>
[![](../../../minus.gif)](../../../#)<right>
  <dimId>INDICATORS</dimId>  <attrId>KEY</attrId>  <ignoreNulls>1</ignoreNulls>  </right>
  </it>
  </its>
  </links>
  <enabledRdsLinkButton>0</enabledRdsLinkButton>  </dest>
  </calcBlock>
  </calcObject>
  </meta>
  <readOnly xmlns="****">0</readOnly>  </OpenAlgResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenAlg" :
  {
   "tOb" :
    {
     "id" : "S1!M!231308"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      },
     "metaGet" :
      {
       "obInst" : "true",
       "calcBlock" :
        {
         "dest" :
          {
           "stub" : "true",
           "linksOperation" : "Get"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "OpenAlgResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!C2"
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
         "@ver" : "5",
         "@hf" : "0",
         "i" : "CALC_BLOCK",
         "n" : "Блок расчёта",
         "k" : "231308",
         "c" : "1709825",
         "p" : "231226",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "calcObject" :
      {
       "k" : "231308",
       "id" : "CALC_BLOCK",
       "n" : "Блок расчёта",
       "vis" : "1",
       "type" : "CalcBlock",
       "calcBlock" :
        {
         "dest" :
          {
           "k" : "231304",
           "id" : "OBJ231297",
           "n" : "Куб-приёмник",
           "vis" : "1",
           "desc" :
            {
             "@ds" : "",
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@ver" : "2",
             "@hf" : "0",
             "i" : "OBJ231297",
             "n" : "Куб-приёмник",
             "k" : "231304",
             "c" : "1281",
             "p" : "231293",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0",
             "trackElementDependents" : "0"
            },
           "hasCalendar" : "1",
           "useCalendarAsStubDimension" : "0",
           "links" :
            {
             "its" :
              {
               "it" :
                [
                  {
                   "k" : "1",
                   "left" :
                    {
                     "dimId" : "FACTS",
                     "attrId" : "KEY",
                     "ignoreNulls" : "0"
                    },
                   "right" :
                    {
                     "dimId" : "INDICATORS",
                     "attrId" : "KEY",
                     "ignoreNulls" : "1"
                    }
                  }
                ]
              }
            },
           "enabledRdsLinkButton" : "0"
          }
        }
      }
    },
   "readOnly" : "0"
  }
}


public static OpenAlgResult OpenAlgWithMetadata(MbId mb, string algId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenAlg()
    {
        tArg = new OpenAlgArg()
        {
            args = new AlgOpenArgs()
            {
                openForEdit = true
            },
            metaGet = new AlgMdPattern()
            {
                calcBlock = new AlgCalcBlockPattern()
                {
                    dest = new AlgCalcBlockDestPattern()
                    {
                        stub = true,
                        linksOperation = ListOperation.Get
                    }
                },
            }
        },
        //Формирование моникёра объекта
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, algId).k }
    };
    //Открытие с запросом метаданных
    var result = somClient.OpenAlg(tOpen);
    return result;
}


См. также:


[OpenAlg:
 Операция](../OpenAlg.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
