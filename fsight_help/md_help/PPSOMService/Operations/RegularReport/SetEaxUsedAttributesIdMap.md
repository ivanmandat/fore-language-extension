# SetEaxUsedAttributesIdMap: Операция

SetEaxUsedAttributesIdMap: Операция
-


**


# SetEaxUsedAttributesIdMap


## Синтаксис


Result SetEaxUsedAttributesIdMap(string mon, SetEaxUsedAttributesIdMapArg
 tArg)


## Параметры


mon. Моникёр
 для работы с аналитической областью данных регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetEaxUsedAttributesIdMap
 загружает ранее сохранённые настройки отображения элементов измерений
 в описании формул.


## Комментарии


Настройки отображения элементов измерений сохраняются в локальном хранилище
 браузера при их изменении с помощью операции [SetEaxFormulaDescriptionUsedAttrs](SetEaxFormulaDescriptionUsedAttrs.htm).
 Храниться настройки будут в элементе с ключом FORMULA_DESCRIPTION_DIALOG.
 Для последующего использования настроек в рамках других сессий их требуется
 предварительно загрузить с помощью операции SetEaxUsedAttributesIdMap.


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта с постфиксом «!DataArea», а в поле tArg
 настройки отображения, полученные из локального хранилища браузера.


Результатом выполнения операции будет логическое значение true,
 если загрузка настроек завершилась успешно.


## Пример


Ниже приведён пример загрузки настроек отображения элементов измерений
 в рамках текущей сессии с BI-сервером. Предполагается, что ячейка с формулами
 уже выделена на листе отчёта. Сами настройки уже получены в коде из локального
 хранилища браузера. В запросе передаётся моникёр для работы с аналитической
 областью данных и настройки отображения. В ответе возвращается признак
 успешной загрузки настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetEaxUsedAttributesIdMap xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ!DataArea</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<dimensionKeyToAttributeIds>
[![](../../minus.gif)](../../#)<it>
  <k>339495</k>  <usedAttributeId>KEY</usedAttributeId>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>339497</k>  <usedAttributeId>START_DATE</usedAttributeId>  </it>
  </dimensionKeyToAttributeIds>
  </tArg>
  </SetEaxUsedAttributesIdMap>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetEaxUsedAttributesIdMapResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetEaxUsedAttributesIdMapResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetEaxUsedAttributesIdMap" :
  {
   "mon" : "NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ!DataArea",
   "tArg" :
    {
     "dimensionKeyToAttributeIds" :
      {
       "it" :
        [
          {
           "k" : "339495",
           "usedAttributeId" : "KEY"
          },
          {
           "k" : "339497",
           "usedAttributeId" : "START_DATE"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetEaxUsedAttributesIdMapResult" : "1"
}


public static bool SetEaxUsedAttributesIdMap(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetEaxUsedAttributesIdMap()
    {
        tArg = new SetEaxUsedAttributesIdMapArg()
        {
            dimensionKeyToAttributeIds = new EaxDimensionKeyToUsedAttributeId[]
            {
                new EaxDimensionKeyToUsedAttributeId()
                {
                    k = 339495,
                    usedAttributeId = "KEY"
                },
                new EaxDimensionKeyToUsedAttributeId()
                {
                    k = 339497,
                    usedAttributeId = "START_DATE"
                }
            }
        },
        mon = moniker + "!DataArea"
    };
    // Восстановление настроек отображения детализированной информации о термах формул
    var result = somClient.SetEaxUsedAttributesIdMap(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
