# SetRdsDatabase: Операция

SetRdsDatabase: Операция
-


**


# SetRdsDatabase


## Синтаксис


SetRdsDatabaseResult SetRdsDatabase(RdsDbId tRdsDb,
 SetRdsDatabaseArg tArg)


## Параметры


tRdsDb. Моникёр
 открытого экземпляра репозитория НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetRdsDatabase изменяет
 метаданные репозитория НСИ.


## Комментарии


Для выполнения операции укажите в поле tRdsDb
 моникёр открытого экземпляра репозитория НСИ, а в поле tArg
 параметры изменения. Моникёр может быть получен при выполнении операции
 [OpenRdsDatabase](OpenRdsDatabase.htm).
 В поле tArg.pattern указывается
 шаблон, в соответствии с которым будут производиться изменения, а в поле
 tArg.meta обновлённые метаданные
 репозитория НСИ.


Для сохранения изменений после операции SetRdsDatabase
 выполните операцию [SaveObject](../Repository/SaveObject.htm)
 или [SaveObjectAs](../Repository/SaveObjectAs.htm).


Результатом работы операции SetRdsDatabase
 будет моникёр репозитория НСИ и обновлённые метаданные, которые могут
 быть запрошены в шаблоне tArg.metaGet.


## Пример


Ниже приведён пример изменения метаданных репозитория НСИ. В запросе
 передаётся моникёр открытого экземпляра репозитория НСИ, шаблон, указывающий
 необходимость изменить базу данных, и описание новой базы данных. В ответе
 приходит обновлённая информация о метаданных репозитория НСИ.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetRdsDatabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRdsDb xmlns="****">
  <id>S1!M!S!RD1</id>  </tRdsDb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <db>true</db>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<db isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>DB_DATA</i>  <n>База данных</n>  <k>174189</k>  <c>513</c>  <p>9050</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </db>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <all>true</all>  </metaGet>
  </tArg>
  </SetRdsDatabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetRdsDatabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!RD1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>RDS_DATABASE</i>  <n>Репозиторий НСИ</n>  <k>219759</k>  <c>4353</c>  <p>5610</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../minus.gif)](../../#)<db ds="****" isShortcut="**0**" isLink="**0**" ver="**24**" hf="**0**">
  <i>DB_DATA</i>  <n>База данных</n>  <k>174189</k>  <c>513</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </db>
  </meta>
  </SetRdsDatabaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetRdsDatabase" :
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
       "db" : "true"
      },
     "meta" :
      {
       "db" :
        {
         "@isShortcut" : "false",
         "@isLink" : "false",
         "@hf" : "false",
         "i" : "DB_DATA",
         "n" : "База данных",
         "k" : "174189",
         "c" : "513",
         "p" : "9050",
         "h" : "false",
         "hasPrv" : "false",
         "ic" : "false"
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetRdsDatabaseResult" :
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
     "dirty" : "1",
     "db" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "24",
       "@hf" : "0",
       "i" : "DB_DATA",
       "n" : "База данных",
       "k" : "174189",
       "c" : "513",
       "p" : "9050",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      }
    }
  }
}


public static SetRdsDatabaseResult SetRDSDBMetadata(MbId mb, RdsDbId moniker, string dbId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tSet = new SetRdsDatabase()
    {
        tArg = new SetRdsDatabaseArg()
        {
            pattern = new RdsDatabaseMdPattern()
            {
                db = true
            },
            meta = new RdsDatabaseMd()
            {
                db = FindObjectById(mb, dbId)
            },
            metaGet = new RdsDatabaseMdPattern()
            {
                all = true
            }
        },
        tRdsDb = moniker
    };
    // Изменение метаданных репозитория НСИ
    var tResult = somClient.SetRdsDatabase(tSet);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
