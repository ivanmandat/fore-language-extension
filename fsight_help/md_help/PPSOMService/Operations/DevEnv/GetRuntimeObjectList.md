# GetRuntimeObjectList: Операция

GetRuntimeObjectList: Операция
-


**


# GetRuntimeObjectList


## Синтаксис


GetRuntimeObjectListResult GetRuntimeObjectList(OdId
 tObject)


## Параметры


tObject. Моникёр
 объекта среды разработки, для которого запущен процесс отладки.


## Описание


Операция GetRuntimeObjectList
 получает списка объектов, находящихся в памяти во время отладки.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, который был запущен на отладку.


Результатом операции будет список объектов, находящихся в памяти, а
 также информация о них.


## Пример


Ниже приведён пример получения списка объектов, находящихся в памяти
 компьютера во время отладки кода. В запросе передаётся моникёр объекта,
 находящегося в режиме отладки. В ответе возвращается полученный список
 объектов и информация о них.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetRuntimeObjectList xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>PBIOBPCAEDCOFOAEFFEFLOBMFDKGKIMENIGAAFCLHCNIIEAC!M!305559</id>  </tObject>
  </GetRuntimeObjectList>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetRuntimeObjectListResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<runtimeObjects xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <className>IMetabase</className>  <refCount>1</refCount>  <address>$     1FE2F2016D0</address>  <comObject>$     1FE303232E0</comObject>  <moduleID>M_DEBUG_SIMPLE</moduleID>  <line>8</line>  </it>
[![](../../minus.gif)](../../#)<it>
  <className>ArrayList</className>  <refCount>0</refCount>  <address>$     1FE2F201630</address>  <comObject>$     1FE4E1960B0</comObject>  <moduleID>M_DEBUG_SIMPLE</moduleID>  <line>8</line>  </it>
[![](../../minus.gif)](../../#)<it>
  <className>IArrayList</className>  <refCount>1</refCount>  <address>$     1FE2F201770</address>  <comObject>$     1FE4E1960B0</comObject>  <moduleID>M_DEBUG_SIMPLE</moduleID>  <line>9</line>  </it>
[![](../../minus.gif)](../../#)<it>
  <className>ICultureInfo</className>  <refCount>1</refCount>  <address>$     1FE2F201810</address>  <comObject>$     1FE3061F3A0</comObject>  <moduleID>M_DEBUG_SIMPLE</moduleID>  <line>9</line>  </it>
  </runtimeObjects>
  </GetRuntimeObjectListResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetRuntimeObjectList" :
  {
   "tObject" :
    {
     "id" : "PBIOBPCAEDCOFOAEFFEFLOBMFDKGKIMENIGAAFCLHCNIIEAC!M!305559"
    }
  }
}

### JSON-ответ:


{
 "GetRuntimeObjectListResult" :
  {
   "runtimeObjects" :
    {
     "it" :
      [
        {
         "className" : "IMetabase",
         "refCount" : "1",
         "address" : "$     1FE2F2016D0",
         "comObject" : "$     1FE303232E0",
         "moduleID" : "M_DEBUG_SIMPLE",
         "line" : "8"
        },
        {
         "className" : "ArrayList",
         "refCount" : "0",
         "address" : "$     1FE2F201630",
         "comObject" : "$     1FE4E1960B0",
         "moduleID" : "M_DEBUG_SIMPLE",
         "line" : "8"
        },
        {
         "className" : "IArrayList",
         "refCount" : "1",
         "address" : "$     1FE2F201770",
         "comObject" : "$     1FE4E1960B0",
         "moduleID" : "M_DEBUG_SIMPLE",
         "line" : "9"
        },
        {
         "className" : "ICultureInfo",
         "refCount" : "1",
         "address" : "$     1FE2F201810",
         "comObject" : "$     1FE3061F3A0",
         "moduleID" : "M_DEBUG_SIMPLE",
         "line" : "9"
        }
      ]
    }
  }
}


public static GetRuntimeObjectListResult GetRuntimeObjectList(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetRuntimeObjectList()
    {
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Получить объекты в памяти
    var result = somClient.GetRuntimeObjectList(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
