# SetEaxFormulaDescriptionUsedAttrs: Операция

SetEaxFormulaDescriptionUsedAttrs: Операция
-


**


# SetEaxFormulaDescriptionUsedAttrs


## Синтаксис


bool SetEaxFormulaDescriptionUsedAttrs(string mon,
 EaxFormulaDescriptionDimensionsArg tArg)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetEaxFormulaDescriptionUsedAttrs
 изменяет настройки отображения детализированной информации о термах формул.


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
 задайте атрибуты измерений, значения которых будут использоваться для
 формирования наименований термов.


Результатом выполнения операции будет логическое значение true,
 если изменение настроек отображения завершилось успешно. Произведённые
 изменения не хранятся в метаданных отчёта, а сохраняются в локальном хранилище
 браузера, в элементе с ключом FORMULA_DESCRIPTION_DIALOG. Для использования
 сохранённых настроек в рамках других сессий загрузите настройки с помощью
 операции [SetEaxUsedAttributesIdMap](SetEaxUsedAttributesIdMap.htm).


## Пример


Ниже приведён пример изменения настроек отображения детализированной
 информации о термах формул. Предполагается, что ячейка с формулами уже
 выделена на листе отчёта. В запросе передаётся моникёр регламентного отчёта,
 ключ формулы. Также передаётся список, содержащий ключи измерений и идентификаторы
 атрибутов, значения которых будут использоваться для обозначения элементов
 в термах. В ответе возвращается признак успешного изменения настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetEaxFormulaDescriptionUsedAttrs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <formulaDescriptionKey>1</formulaDescriptionKey>[![](../../minus.gif)](../../#)<formulaDimensions>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>339495</k>  <usedAttributeId>KEY</usedAttributeId>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>339497</k>  <usedAttributeId>START_DATE</usedAttributeId>  </it>
  </its>
  </formulaDimensions>
  </tArg>
  </SetEaxFormulaDescriptionUsedAttrs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetEaxFormulaDescriptionUsedAttrsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetEaxFormulaDescriptionUsedAttrsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetEaxFormulaDescriptionUsedAttrs" :
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
}

### JSON-ответ:


{
 "SetEaxFormulaDescriptionUsedAttrsResult" : "1"
}


public static bool SetEaxFormulaDescriptionUsedAttrs(string moniker, uint formulaKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetEaxFormulaDescriptionUsedAttrs()
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
                        k = 339495,
                        usedAttributeId = "KEY"
                    },
                    new EaxFormulaDescriptionDimension()
                    {
                        k = 339497,
                        usedAttributeId = "START_DATE"
                    }
                }
            }
        },
        mon = moniker
    };
    // Изменение настроек отображения детализированной информации о термах формул
    var result = somClient.SetEaxFormulaDescriptionUsedAttrs(tSet);
    return result;
}


См. также:


[Работа с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
