# GetAssembly: Операция

GetAssembly: Операция
-


**


# GetAssembly


## Синтаксис


GetAssemblyResult GetAssembly(OdId tObject)


## Параметры


tObject. Моникёр
 объекта репозитория, являющегося Fore-сборкой.


## Описание


Операция GetAssembly получает
 информацию о сборке репозитория.


## Комментарии


Для выполнения операции укажите в параметре tObject
 моникёр объекта репозитория, являющегося сборкой. Моникёр объекта может
 быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 Результатом операции будет список сборок (системных и прикладных), на
 которые добавлены ссылки, а также список объектов, которые реализованы
 в сборке.


## Пример


Ниже приведён пример использования операции GetAssembly
 для получения информации о сборке. В запросе передаётся моникёр сборки
 в репозитории. В ответе приходит информация о модулях, реализованных в
 указанной сборке, и ссылках на другие сборки. В примере C# используется
 функция FindObjectById, код которой
 приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetAssembly xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!172000</id>  </tObject>
  </GetAssembly>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetAssemblyResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<references>
[![](../../minus.gif)](../../#)<builtinReferences>
  <s>Metabase</s>  </builtinReferences>
[![](../../minus.gif)](../../#)<repoReferences>
[![](../../minus.gif)](../../#)<it ds="****" isShortcut="**0**" isLink="**0**" ver="**18**" hf="**0**">
  <i>M_ADDITIONAL</i>  <n>Дополнительно</n>  <k>172002</k>  <c>1537</c>  <p>171999</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </it>
  </repoReferences>
  </references>
[![](../../minus.gif)](../../#)<modules>
[![](../../minus.gif)](../../#)<it ds="****" isShortcut="**0**" isLink="**0**" ver="**14**" hf="**0**">
  <i>M_MAIN</i>  <n>Модуль</n>  <k>172001</k>  <c>1537</c>  <p>172000</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </it>
  </modules>
[![](../../minus.gif)](../../#)<desc ds="****" isShortcut="**0**" isLink="**0**" ver="**11**" hf="**0**">
  <i>A_CORE</i>  <n>Сборка</n>  <k>172000</k>  <c>1539</c>  <p>171999</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </desc>
  </meta>
  </GetAssemblyResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetAssembly" :
  {
   "tObject" :
    {
     "id" : "S1!M!172000"
    }
  }
}

### JSON-ответ:


{
 "GetAssemblyResult" :
  {
   "meta" :
    {
     "references" :
      {
       "builtinReferences" :
        {
         "s" : "Metabase"
        },
       "repoReferences" :
        {
         "it" :
          {
           "@ds" : "",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@ver" : "18",
           "@hf" : "0",
           "i" : "M_ADDITIONAL",
           "n" : "Дополнительно",
           "k" : "172002",
           "c" : "1537",
           "p" : "171999",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0",
           "trackElementDependents" : "0"
          }
        }
      },
     "modules" :
      {
       "it" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "14",
         "@hf" : "0",
         "i" : "M_MAIN",
         "n" : "Модуль",
         "k" : "172001",
         "c" : "1537",
         "p" : "172000",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0"
        }
      },
     "desc" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "11",
       "@hf" : "0",
       "i" : "A_CORE",
       "n" : "Сборка",
       "k" : "172000",
       "c" : "1539",
       "p" : "171999",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      }
    }
  }
}


public static GetAssemblyResult GetAssemblyInfo(MbId mb, string assmId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetAssembly()
    {
        //Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, assmId).k }
    };
    //Получение информации о сборке
    var result = somClient.GetAssembly(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
