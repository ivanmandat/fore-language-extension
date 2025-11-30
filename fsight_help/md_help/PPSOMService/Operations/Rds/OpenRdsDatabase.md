# OpenRdsDatabase: Операция

OpenRdsDatabase: Операция
-


**


# OpenRdsDatabase


## Синтаксис


OpenRdsDatabaseResult OpenRdsDatabase(OdId tOb,
 OpenRdsDatabaseArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося репозиторием НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenRdsDatabase открывает
 репозитории НСИ.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр объекта репозитория, являющегося репозиторием НСИ, а в поле tArg параметры открытия. Результатом
 операции будет моникёр открытого экземпляра репозитория НСИ и метаданные,
 если было определено поле tArg.metaGet.


Дальнейшая работа осуществляется с помощью операций [GetRdsDatabase](GetRdsDatabase.htm) и [SetRdsDatabase](SetRdsDatabase.htm).


Для закрытия экземпляра репозитория НСИ используйте операцию [CloseRdsDatabase](CloseRdsDatabase.htm).


## Пример


Ниже приведён пример открытия репозитория НСИ на редактирование. В запросе
 передаётся моникёр объекта репозитория, являющегося репозиторием НСИ.
 В ответе приходит моникёр экземпляра репозитория НСИ, открытого на редактирование.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenRdsDatabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!219759</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <bind>true</bind>  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenRdsDatabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenRdsDatabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!RD1</id>  </id>
  </OpenRdsDatabaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenRdsDatabase" :
  {
   "tOb" :
    {
     "id" : "S1!M!219759"
    },
   "tArg" :
    {
     "args" :
      {
       "bind" : "true",
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenRdsDatabaseResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!RD1"
    }
  }
}


public static OpenRdsDatabaseResult OpenRDSDatabase(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenRdsDatabase()
    {
        tArg = new OpenRdsDatabaseArg()
        {
            args = new RdsDatabaseOpenArgs()
            {
                bind = true,
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие репозитория НСИ
    var tResult = somClient.OpenRdsDatabase(tOpen);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
