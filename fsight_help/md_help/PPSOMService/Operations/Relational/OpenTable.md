# OpenTable: Операция

OpenTable: Операция
-


**


# OpenTable


## Синтаксис


TableResult OpenTable(OdId tOb, OpenTableArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося таблицей/присоединённой таблицей/представлением.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenTable открывает
 таблицу/присоединённую таблицу/представление и возвращает контекст для
 работы с ней.


## Комментарии


Операция позволяет получить доступ к структуре таблицы, присоединённой
 таблицы или представления, а также к набору данных, хранящихся в этих
 объектах. Для выполнения операции укажите в поле tOb
 моникёр объекта репозитория, являющегося таблицей/присоединённой таблицей/представлением,
 а в поле tArg параметры открытия.
 Параметры для извлечения метаданных указываются в поле tArg.metaGet.
 Результатом работы операции будет моникёр открытого экземпляра объекта,
 а также запрошенные метаданные, если при выполнении операции был задан
 соответствующий шаблон. Дальнейшая работа с открытым экземпляром таблицы/присоединённой
 таблицы/представления осуществляется с помощью операций [GetTable](GetTable.htm) и [SetTable](SetTable.htm). Для закрытия открытого экземпляра
 объекта используйте операцию [CloseTable](CloseTable.htm).


## Пример


Пример открытия таблицы на редактирование. В запросе передается моникёр
 таблицы в репозитории. В ответе приходит моникёр открытого экземпляра
 таблицы.


В примере для C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenTable xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!9053</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenTable>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenTableResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!TABLE5</id>  </id>
  </OpenTableResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenTable" :
  {
   "tOb" :
    {
     "id" : "S1!M!9053"
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
 "OpenTableResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!TABLE5"
    }
  }
}


public static TableResult OpenTable(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenTable()
    {
        tArg = new OpenTableArg()
        {
            args = new TableOpenArgs()
            {
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие таблицы
    var tResult = somClient.OpenTable(tOpen);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
