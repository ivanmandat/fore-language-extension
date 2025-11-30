# GetDba: Операция

GetDba: Операция
-


**


# GetDba


## Синтаксис


GetDbaResult GetDba(OdId tOb, GetDbaArg tArg)


## Параметры


tOb. Моникёр
 открытого экземпляра бизнес-приложения.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDba получает метаданные
 бизнес-приложения.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр открытого экземпляра бизнес-приложения, а в поле tArg.pattern
 шаблон, в соответствии с которым будут получены метаданные. Моникёр может
 быть получен при выполнении операции [OpenDba](OpenDba.htm).


Результатом выполнения операции будут полученные метаданные.


## Пример


Ниже приведён пример получения метаданных бизнес-приложения. В запросе
 передаётся моникёр открытого экземпляра бизнес-приложения и шаблон, в
 соответствии с которым возвращаются метаданны. В ответе возвращаются полученные
 метаданные.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDba xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <db>true</db>  </pattern>
  </tArg>
  </GetDba>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDbaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>DBA_APP</i>  <n>Бизнес-приложение</n>  <k>340435</k>  <c>1054465</c>  <p>340516</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  </meta>
  </GetDbaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDba" :
  {
   "tOb" :
    {
     "id" : "EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "db" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDbaResult" :
  {
   "id" :
    {
     "id" : "EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ"
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
         "@ver" : "4",
         "@hf" : "0",
         "i" : "DBA_APP",
         "n" : "Бизнес-приложение",
         "k" : "340435",
         "c" : "1054465",
         "p" : "340516",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0"
    }
  }
}


public static GetDbaResult GetDba(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDba()
    {
        tArg = new GetDbaArg()
        {
            pattern = new DbaMdPattern()
            {
                db = true
            }
        },
        // Формирование моникёра объекта
        tOb = new OdId() { id = moniker }
    };
    // Получение информации о бизнес-процессе
    var result = somClient.GetDba(tGet);
    return result;
}


См. также:


[Работа с
 бизнес-приложениями](DBA_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
