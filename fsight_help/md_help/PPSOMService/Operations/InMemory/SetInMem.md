# SetInMem: Операция

SetInMem: Операция
-


**


# SetInMem


## Синтаксис


GetInMemResult SetInMem(SetInMemArg tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция SetInMem изменяет кеш
 In-Memory у объекта репозитория.


## Комментарии


Операция позволяет включить/отключить использование кеша In-Memory у
 куба или справочника репозитория. Для выполнения операции укажите в поле
 tArg.cache.object объект репозитория,
 а в поле tArg.cache.action действие,
 выполняемое с кешем. При включении кеширования кубов, кеш создаётся по
 полной отметке куба. Если определить поле tArg.metaGet,
 то результатом операции будет обновлённая информация о кеше In-Memory
 для объекта.


Для обновления кеша куба по частичной отметке используйте операцию [UpdCubeCache](../Cube/UpdCubeCache.htm).


Примечание.
 Для корректной работы операции необходимо, чтобы файлы кеша использовались
 только текущим BI-сервером.


## Пример


Ниже приведён пример подготовки кеша In-Memory для куба репозитория.
 В запросе передаётся моникёр куба, указывается действие, выполняемое с
 кешем. Операция будет производиться синхронно, по завершению кеширования
 куба будет возвращена обновлённая информация о статусе кеша.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	SOAP JSONC#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetInMem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<cache>
[![](../../minus.gif)](../../#)<object>
[![](../../minus.gif)](../../#)<id>
  <id>S1!M!5857</id>  </id>
  </object>
  <action>Prepare</action>  <async>false</async>  </cache>
[![](../../minus.gif)](../../#)<metaGet>
[![](../../minus.gif)](../../#)<cache>
[![](../../minus.gif)](../../#)<object>
[![](../../minus.gif)](../../#)<id>
  <id>S1!M!5857</id>  </id>
  </object>
  </cache>
  </metaGet>
  </tArg>
  </SetInMem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetInMemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<cache>
  <isOK>1</isOK>[![](../../minus.gif)](../../#)<object>
[![](../../minus.gif)](../../#)<id>
  <id>S1!M!5857</id>  </id>
  </object>
  <objectStatus>Exists</objectStatus>  </cache>
  </meta>
  </SetInMemResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetInMem" :
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
        },
       "action" : "Prepare",
       "async" : "false"
      },
     "metaGet" :
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
}

### JSON-ответ:


{
 "SetInMemResult" :
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


public static GetInMemResult SetInMemParams(MbId mb, string objectId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    var objKey = FindObjectById(mb, objectId).k;
    //Параметры выполнения операции
    var tSet = new SetInMem()
    {
        tArg = new SetInMemArg()
        {
            cache = new SetInMemCacheArg()
            {
                action = InMemCacheAction.Prepare,
                async = false,
                @object = new InMemCacheObject()
                {
                    id = new OdId() { id = mb.id + "!" + objKey }
                }
            },
            metaGet = new GetInMemArg()
            {
                cache = new GetInMemCacheArg()
                {
                    @object = new InMemCacheObject()
                    {
                        id = new OdId() { id = mb.id + "!" + objKey }
                    }
                }
            }
        }
    };
    //Изменение параметров кеширования объекта
    var result = somClient.SetInMem(tSet);
    return result;
}


См. также:


[Работа
 с кешем In-Memory](InMemory_List.htm) | [UpdCubeCache:
 Операция](../Cube/UpdCubeCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
