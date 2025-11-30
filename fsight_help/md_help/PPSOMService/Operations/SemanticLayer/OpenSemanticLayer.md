# OpenSemanticLayer: Операция

OpenSemanticLayer: Операция
-


**


# OpenSemanticLayer


## Синтаксис


SemanticLayerMetaResult OpenSemanticLayer(OdId tObject,
 OpenSemanticLayerMetaArg tArg)


## Параметры


tObject. Моникёр
 объекта репозитория, являющегося моделью данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenSemanticLayer открывает
 модель данных.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, являющегося моделью данных, а в поле tArg
 параметры открытия. В поле tArg.args
 указываются режим открытия модели данных. В поле tArg.meta
 задайте пустые значения или значения по умолчанию для тех полей с метаданными,
 значения которых необходимо получить.


Результатом работы операции будет моникёр открытого экземпляра модели
 данных, а также полученные метаданные, если были определены соответствующие
 поля.


Дальнейшая работа с моделью данных осуществляется с помощью операций
 [GetSemanticLayerMeta](GetSemanticLayerMeta.htm), [SetSemanticLayerMeta](SetSemanticLayerMeta.htm),
 а также ряда специфических операций, предназначенных для выполнения определённых
 действий. Для закрытия открытого экземпляра информационной панели используйте
 операцию [CloseSemanticLayer](CloseSemanticLayer.htm).


## Пример


Ниже приведён пример открытия экземпляра модели данных на редактирование.
 В запросе передаётся моникёр объекта репозитория, являющегося моделью
 данных. В ответе возвращается моникёр открытого экземпляра модели данных.
 Какие-либо дополнительные метаданные не извлекаются.


В примере C# используется функция FindObjectById, код которой приведён
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenSemanticLayer xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!358178</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenSemanticLayer>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenSemanticLayerResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!S!POFIOKJAHPABDGOAEHEMNLOGBNPHIANDECKECPPGGIBIEIJCA</id>  </id>
  </OpenSemanticLayerResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenSemanticLayer" :
  {
   "tObject" :
    {
     "id" : "OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!358178"
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
 "OpenSemanticLayerResult" :
  {
   "id" :
    {
     "id" : "OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!S!POFIOKJAHPABDGOAEHEMNLOGBNPHIANDECKECPPGGIBIEIJCA"
    }
  }
}


public static SemanticLayerMetaResult OpenSemanticLayer(MbId mb, string objectId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenSemanticLayer()
    {
        tArg = new OpenSemanticLayerMetaArg()
        {
            args = new SemanticLayerMetaOpenArgs()
            {
                openForEdit = true
            }
        },
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, objectId).k }
    };
    // Открытие модели данных
    var result = somClient.OpenSemanticLayer(tOpen);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
