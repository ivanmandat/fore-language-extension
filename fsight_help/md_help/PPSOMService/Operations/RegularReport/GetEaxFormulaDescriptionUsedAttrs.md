# GetEaxFormulaDescriptionUsedAttrs: Операция

GetEaxFormulaDescriptionUsedAttrs: Операция
-


**


# GetEaxFormulaDescriptionUsedAttrs


## Синтаксис


GetEaxFormulaDescriptionDimensionsResult GetEaxFormulaDescriptionUsedAttrs(string
 mon, EaxFormulaDescriptionDimensionsArg tArg)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetEaxFormulaDescriptionUsedAttrs
 получает настройки отображения детализированной информации о термах формул.


## Комментарии


Операция актуальна, если в отчёте для расчёта дополнительно используются
 алгоритмы расчёта. Ячейка, рассчитываемая по формулам, предварительно
 должна быть выделена с помощью операции [SetTabSheetData](../Visualizators/SetTabSheetData.htm).


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта. Моникёр может быть получен при
 выполнении операции [OpenPrxMeta](OpenPrxMeta.htm). Отчёт должен
 быть вычислен. В поле tArg.formulaDescriptionKey
 укажите ключ формулы. Ключ можно получить в результате выполнения операции
 [GetEaxFormulaDescriptions](GetEaxFormulaDescriptions.htm).
 В поле tArg.formulaDimensions
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить.


Результатом операции будет полученная информация об атрибутах измерений,
 значения которых используются для формирования термов.


## Пример


Ниже приведён пример получения настроек отображения детализированной
 информации о термах формул. Предполагается, что ячейка с формулами уже
 выделена на листе отчёта. В запросе передаётся моникёр регламентного отчёта,
 ключ формулы и список получаемых полей. В ответе возвращается полученная
 информация об атрибутах измерений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetEaxFormulaDescriptionUsedAttrs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <formulaDescriptionKey>1</formulaDescriptionKey>[![](../../minus.gif)](../../#)<formulaDimensions>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <usedAttributeId />
  <attributes />
  </it>
  </its>
  </formulaDimensions>
  </tArg>
  </GetEaxFormulaDescriptionUsedAttrs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetEaxFormulaDescriptionUsedAttrsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<formulaDimensions xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>339497</k>  <n>Календарь</n>  <usedAttributeId>NAME</usedAttributeId>  <attributes />
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>339495</k>  <n>Справочник 1</n>  <usedAttributeId>NAME</usedAttributeId>  <attributes />
  </it>
  </its>
  </formulaDimensions>
  </GetEaxFormulaDescriptionUsedAttrsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetEaxFormulaDescriptionUsedAttrs" :
  {
   "mon" : "NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ",
   "tArg" :
    {
     "formulaDescriptionKey" : "1",
     "formulaDimensions" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "-1",
             "id" : "",
             "n" : "",
             "usedAttributeId" : "",
             "attributes" : ""
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetEaxFormulaDescriptionUsedAttrsResult" :
  {
   "formulaDimensions" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "339497",
           "n" : "Календарь",
           "usedAttributeId" : "NAME",
           "attributes" : ""
          },
          {
           "k" : "339495",
           "n" : "Справочник 1",
           "usedAttributeId" : "NAME",
           "attributes" : ""
          }
        ]
      }
    }
  }
}


public static GetEaxFormulaDescriptionDimensionsResult GetEaxFormulaDescriptionUsedAttrs(string moniker, uint formulaKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetEaxFormulaDescriptionUsedAttrs()
    {
        tArg = new EaxFormulaDescriptionDimensionsArg()
        {
            formulaDescriptionKey = formulaKey,
            formulaDimensions = new EaxFormulaDescriptionDimensions()
            {
                its = new EaxFormulaDescriptionDimension[]
                {
                    new EaxFormulaDescriptionDimension()
                    {
                        id = string.Empty,
                        k = uint.MaxValue,
                        n = string.Empty,
                        attributes = new EaxFormulaDescriptionDimensionAttrs(),
                        usedAttributeId = string.Empty
                    }
                }
            }
        },
        mon = moniker
    };
    // Получение настроек отображения детализированной информации о термах формул
    var result = somClient.GetEaxFormulaDescriptionUsedAttrs(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
