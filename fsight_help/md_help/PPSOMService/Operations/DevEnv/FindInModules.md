# FindInModules: Операция

FindInModules: Операция
-


**


# FindInModules


## Синтаксис


FindInModulesResult FindInModules(FindInModulesArg
 tArgs)


## Параметры


tArgs. Параметры
 выполнения операции.


## Описание


Операция FindInModules осуществляет
 поиск текста по коду объектов среды разработки.


## Комментарии


Операция позволяет найти все модули/формы, в коде которых встречается
 заданная строка. Поиск осуществляется в соответствии с параметрами, указанными
 в tArgs. Результатом работы операции
 будет список найденных объектов, а также информация о найденном тексте
 (строка, в которой находится искомый текст, и индекс позиции в ней).


## Пример


Ниже приведён пример использования операции FindInModules
 для поиска заданной строки в коде модулей. В запросе передаётся моникёр
 папки, которой будет ограничена зона поиска, искомый текст и другие параметры
 поиска. В ответе приходит информация о модулях, в коде которых встречается
 искомый текст. В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<FindInModules xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArgs xmlns="****">
[![](../../minus.gif)](../../#)<root>
  <id>S1!M!171999</id>  </root>
  <caseSensitive>false</caseSensitive>  <wholeWordsOnly>false</wholeWordsOnly>  <findString>Create</findString>  </tArgs>
  </FindInModules>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<FindInModulesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<result xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<moduleId>
  <id>M_ADDITIONAL</id>  </moduleId>
  <foundLine>Public Constructor Create;</foundLine>  <row>4</row>  <pos>21</pos>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<moduleId>
  <id>M_ADDITIONAL</id>  </moduleId>
  <foundLine>End Constructor Create;</foundLine>  <row>7</row>  <pos>18</pos>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<moduleId>
  <id>M_ADDITIONAL</id>  </moduleId>
  <foundLine>Public Constructor CreateWithParams(Size: Integer; DefaultValue: Double = 0);</foundLine>  <row>9</row>  <pos>21</pos>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<moduleId>
  <id>M_ADDITIONAL</id>  </moduleId>
  <foundLine>End Constructor CreateWithParams;</foundLine>  <row>15</row>  <pos>18</pos>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<moduleId>
  <id>M_ADDITIONAL</id>  </moduleId>
  <foundLine>obj := New TestObject.CreateWithParams(10, 100);</foundLine>  <row>27</row>  <pos>24</pos>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<moduleId>
  <id>M_ADDITIONAL</id>  </moduleId>
  <foundLine>Debug.WriteLine("The main procedure is running. The object is created.");</foundLine>  <row>28</row>  <pos>64</pos>  </it>
  </result>
  </FindInModulesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "FindInModules" :
  {
   "tArgs" :
    {
     "root" :
      {
       "id" : "S1!M!171999"
      },
     "caseSensitive" : "false",
     "wholeWordsOnly" : "false",
     "findString" : "Create"
    }
  }
}

### JSON-ответ:


{
 "FindInModulesResult" :
  {
   "result" :
    {
     "it" :
      [
        {
         "moduleId" :
          {
           "id" : "M_ADDITIONAL"
          },
         "foundLine" : "Public Constructor Create;",
         "row" : "4",
         "pos" : "21"
        },
        {
         "moduleId" :
          {
           "id" : "M_ADDITIONAL"
          },
         "foundLine" : "End Constructor Create;",
         "row" : "7",
         "pos" : "18"
        },
        {
         "moduleId" :
          {
           "id" : "M_ADDITIONAL"
          },
         "foundLine" : "Public Constructor CreateWithParams(Size: Integer; DefaultValue: Double = 0);",
         "row" : "9",
         "pos" : "21"
        },
        {
         "moduleId" :
          {
           "id" : "M_ADDITIONAL"
          },
         "foundLine" : "End Constructor CreateWithParams;",
         "row" : "15",
         "pos" : "18"
        },
        {
         "moduleId" :
          {
           "id" : "M_ADDITIONAL"
          },
         "foundLine" : "obj := New TestObject.CreateWithParams(10, 100);",
         "row" : "27",
         "pos" : "24"
        },
        {
         "moduleId" :
          {
           "id" : "M_ADDITIONAL"
          },
         "foundLine" : "Debug.WriteLine("The main procedure is running. The object is created.");",
         "row" : "28",
         "pos" : "64"
        }
      ]
    }
  }
}


public static FindInModulesResult FindInModules(MbId mb, string root, string text)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tFind = new FindInModules()
    {
        tArgs = new FindInModulesArg()
        {
            findString = text,
            root = new OdId() { id = mb.id + "!" + FindObjectById(mb, root).k },
            caseSensitive = false,
            wholeWordsOnly = false
        }
    };
    //Поиск по коду модулей
    var result = somClient.FindInModules(tFind);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
