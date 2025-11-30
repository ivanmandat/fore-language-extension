# OpenDatabase: Операция

OpenDatabase: Операция
-


**


# OpenDatabase


## Синтаксис


DatabaseResult OpenDatabase(OdId tOb, OpenDatabaseArg
 tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося базой данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenDatabase открывает
 базу данных и возвращает контекст для работы с ней.


## Комментарии


Операция позволяет получить доступ к настройкам подключения базы данных
 и получить список таблиц, которые в ней созданы. Для выполнения операции
 укажите в поле tOb моникёр объекта
 репозитория, являющегося базой данных, а в поле tArg
 параметры открытия базы данных. Параметры для извлечения метаданных указываются
 в поле tArg.metaGet. Результатом
 работы операции будет моникёр открытого экземпляра базы данных, а также
 запрошенные метаданные, если при выполнении операции был задан соответствующий
 шаблон. Дальнейшая работа с открытым экземпляром базы данных осуществляется
 с помощью операций [GetDatabase](GetDatabase.htm)
 и [SetDatabase](SetDatabase.htm).
 Для закрытия открытого экземпляра базы данных используйте операцию [CloseDatabase](CloseDatabase.htm).


## Пример


Пример открытия базы данных на редактирование. В запросе передается
 моникёр базы данных в репозитории. В ответе приходит моникёр открытого
 экземпляра базы данных.


В примере для C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenDatabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!174189</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenDatabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenDatabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DB4</id>  </id>
  </OpenDatabaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDatabase" :
  {
   "tOb" :
    {
     "id" : "S1!M!174189"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenDatabaseResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!DB4"
    }
  }
}


public static DatabaseResult OpenDB(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenDatabase()
    {
        tArg = new OpenDatabaseArg()
        {
            args = new DatabaseOpenArgs()
            {
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие базы данных
    var tResult = somClient.OpenDatabase(tOpen);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
