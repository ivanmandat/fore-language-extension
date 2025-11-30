# Открытие объекта пользовательского класса: Операция OpenCustomOb

Открытие объекта пользовательского класса: Операция OpenCustomOb
-


**


# Открытие объекта пользовательского класса


Ниже приведён пример использования операции [OpenCustomOb](../OpenCustomOb.htm)
 для открытия объекта пользовательского класса. В запросе передаётся моникёр
 объекта репозитория. В ответе приходит моникёр открытого на редактирование
 экземпляра объекта.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenCustomOb xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!38194</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <data>true</data>  </metaGet>
  <openForEdit>true</openForEdit>  </tArg>
  </OpenCustomOb>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenCustomObResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>CUST_OBJ</i>  <n>Обработчик данных</n>  <k>38194</k>  <c>71425</c>  <p>38193</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<refs>
  <its />
  </refs>
  <content />
  </data>
  </meta>
  </OpenCustomObResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenCustomOb" :
  {
   "tOb" :
    {
     "id" : "LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!38194"
    },
   "tArg" :
    {
     "metaGet" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "data" : "true"
      },
     "openForEdit" : "true"
    }
  }
}

### JSON-ответ:


{
 "OpenCustomObResult" :
  {
   "id" :
    {
     "id" : "LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO"
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
         "@ver" : "1",
         "@hf" : "0",
         "i" : "CUST_OBJ",
         "n" : "Обработчик данных",
         "k" : "38194",
         "c" : "71425",
         "p" : "38193",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "data" :
      {
       "refs" :
        {
         "its" : ""
        },
       "content" : ""
      }
    }
  }
}


public static OpenCustomObResult OpenCustomObject(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenCustomOb()
    {
        tArg = new OpenCustomObArg()
        {
            openForEdit = true,
            metaGet = new CustomObMdPattern()
            {
                data = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    // Открытие объекта пользовательского класса
    var tResult = somClient.OpenCustomOb(tOpen);
    return tResult;
}


См. также:


[OpenCustomOb:
 Операция](../OpenCustomOb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
