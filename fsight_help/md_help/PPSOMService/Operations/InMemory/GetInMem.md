# GetInMem: Операция

GetInMem: Операция
-


**


# GetInMem


## Синтаксис


GetInMemResult GetInMem(GetInMemArg tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetInMem получает информацию
 о кеше In-Memory у объекта репозитория.


## Комментарии


Операция позволяет проверить наличие и состояние кеша In-Memory у куба
 или справочника репозитория. Для выполнения операции укажите в поле tArg.cache.object параметры доступа
 к объекту. Результатом операции будет информация о наличии кеша у объекта
 и его актуальности.


Примечание.
 Для корректной работы операции необходимо, чтобы файлы кеша использовались
 только текущим BI-сервером.


## Пример


Ниже приведён пример получения информации о кеше In-Memory для куба
 репозитория. В запросе передаётся моникёр куба, в ответе приходит информация
 о кеше.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetInMem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<cache>
[![](../../minus.gif)](../../#)<object>
[![](../../minus.gif)](../../#)<id>
  <id>S1!M!5857</id>  </id>
  </object>
  </cache>
  </tArg>
  </GetInMem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetInMemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<cache>
  <isOK>1</isOK>[![](../../minus.gif)](../../#)<object>
[![](../../minus.gif)](../../#)<id>
  <id>S1!M!5857</id>  </id>
  </object>
  <objectStatus>Exists</objectStatus>  </cache>
  </meta>
  </GetInMemResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetInMem" :
  {
   "tArg" :
    {
     "cache" :
      {
       "object" :
        {
         "id" :
          {
           "id" : "S1!M!5857"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetInMemResult" :
  {
   "meta" :
    {
     "cache" :
      {
       "isOK" : "1",
       "object" :
        {
         "id" :
          {
           "id" : "S1!M!5857"
          }
        },
       "objectStatus" : "Exists"
      }
    }
  }
}


public static GetInMemResult GetInMemParams(MbId mb, string objectId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetInMem()
    {
        tArg = new GetInMemArg()
        {
            cache = new GetInMemCacheArg()
            {
                @object = new InMemCacheObject()
                {
                    id = new OdId() { id = mb.id + "!" + FindObjectById(mb, objectId).k }
                }
            }
        }
    };
    //Получение информации о кеше объекта
    var result = somClient.GetInMem(tGet);
    return result;
}


См. также:


[Работа
 с кешем In-Memory](InMemory_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
