# GetRdsDatabase: Операция

GetRdsDatabase: Операция
-


**


# GetRdsDatabase


## Синтаксис


GetRdsDatabaseResult GetRdsDatabase(RdsDbId tRdsDb,
 GetRdsDatabaseArg tArg)


## Параметры


tRdsDb. Моникёр
 открытого экземпляра репозитория НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetRdsDatabase извлекает
 метаданные репозитория НСИ.


## Комментарии


Для выполнения операции укажите в поле tRdsDb
 моникёр открытого экземпляра репозитория НСИ, а в поле tArg.pattern
 шаблон, в соответствии с которым будут извлекаться метаданные. Моникёр
 может быть получен при выполнении операции [OpenRdsDatabase](OpenRdsDatabase.htm). Результатом
 операции будут запрошенные метаданные.


## Пример


Ниже приведён пример получения метаданных репозитория НСИ. В запросе
 передаётся моникёр открытого экземпляра репозитория НСИ и шаблон, указывающий
 необходимость получить все метаданные. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetRdsDatabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRdsDb xmlns="****">
  <id>S1!M!S!RD1</id>  </tRdsDb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <all>true</all>  </pattern>
  </tArg>
  </GetRdsDatabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetRdsDatabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!RD1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>RDS_DATABASE</i>  <n>Репозиторий НСИ</n>  <k>219759</k>  <c>4353</c>  <p>5610</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<db ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>DB</i>  <n>БД</n>  <k>56</k>  <c>513</c>  <p>12363</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </db>
  </meta>
  </GetRdsDatabaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetRdsDatabase" :
  {
   "tRdsDb" :
    {
     "id" : "S1!M!S!RD1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetRdsDatabaseResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!RD1"
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
         "@ver" : "2",
         "@hf" : "0",
         "i" : "RDS_DATABASE",
         "n" : "Репозиторий НСИ",
         "k" : "219759",
         "c" : "4353",
         "p" : "5610",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "db" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "2",
       "@hf" : "0",
       "i" : "DB",
       "n" : "БД",
       "k" : "56",
       "c" : "513",
       "p" : "12363",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      }
    }
  }
}


public static GetRdsDatabaseResult GetRDSDBMetadata(RdsDbId moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tGet = new GetRdsDatabase()
    {
        tArg = new GetRdsDatabaseArg()
        {
            pattern = new RdsDatabaseMdPattern()
            {
                all = true
            }
        },
        tRdsDb = moniker
    };
    // Получение метаданных репозитория НСИ
    var tResult = somClient.GetRdsDatabase(tGet);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
