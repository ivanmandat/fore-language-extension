# OpenQuery: Операция

OpenQuery: Операция
-


**


# OpenQuery


## Синтаксис


QueryResult OpenQuery(OdId tOb, OpenQueryArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося запросом.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenQuery открывает
 объект репозитория «Запрос» и возвращает контекст для работы с ним.


## Комментарии


Операция позволяет получить доступ к структуре запроса, а также к набору
 данных, извлекаемых с помощью этого запроса. Для выполнения операции укажите
 в поле tOb моникёр объекта репозитория,
 являющегося запросом, а в поле tArg
 параметры открытия. Параметры для извлечения метаданных указываются в
 поле tArg.metaGet. Результатом
 работы операции будет моникёр открытого экземпляра запроса, а также запрошенные
 метаданные, если при выполнении операции был задан соответствующий шаблон.
 Дальнейшая работа с открытым экземпляром запроса осуществляется с помощью
 операций [GetQuery](GetQuery.htm)
 и [SetQuery](SetQuery.htm).
 Для закрытия открытого экземпляра запроса используйте операцию [CloseQuery](CloseQuery.htm).


## Пример


Пример открытия объекта «Запрос» на редактирование. В запросе передается
 моникёр объекта в репозитории. В ответе приходит моникёр открытого экземпляра
 объекта «Запрос».


В примере для C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenQuery xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!9051</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenQuery>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenQueryResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!QUERY6</id>  </id>
  </OpenQueryResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenQuery" :
  {
   "tOb" :
    {
     "id" : "S1!M!9051"
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
 "OpenQueryResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!QUERY6"
    }
  }
}


public static QueryResult OpenQuery(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenQuery()
    {
        tArg = new OpenQueryArg()
        {
            args = new QueryOpenArgs()
            {
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие запроса
    var tResult = somClient.OpenQuery(tOpen);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
