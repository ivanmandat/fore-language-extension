# GetEaxTermDescriptions: Операция

GetEaxTermDescriptions: Операция
-


**


# GetEaxTermDescriptions


## Синтаксис


GetEaxTermDescriptionsResult GetEaxTermDescriptions(string
 mon, GetEaxTermDescriptionsArg tArg)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetEaxTermDescriptions
 получает информацию о термах, которые используются в формуле для расчёта
 значения в ячейке таблицы.


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
 В поле tArg.termDescriptions
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить.


Результатом операции будет полученная информация о термах формулы.


## Пример


Ниже приведён пример получения информации о термах, которые используются
 в формуле для расчёта значения в ячейке таблицы. Предполагается, что ячейка
 с формулами уже выделена на листе отчёта. В запросе передаётся моникёр
 регламентного отчёта и список получаемых полей. В ответе возвращается
 полученная информация о термах.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetEaxTermDescriptions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <formulaDescriptionKey>1</formulaDescriptionKey>[![](../../minus.gif)](../../#)<termDescriptions>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <shortName />
  <fullName />
[![](../../minus.gif)](../../#)<value>
  <v />
  </value>
  </it>
  </its>
  </termDescriptions>
  </tArg>
  </GetEaxTermDescriptions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetEaxTermDescriptionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<termDescriptions xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>0</k>  <n>Куб ! 3</n>  <shortName>Куб ! 3</shortName>  <fullName>Куб ! Элемент 0 | 2010 | 3</fullName>[![](../../minus.gif)](../../#)<value>
  <v>2</v>  </value>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <n>Куб ! 1</n>  <shortName>Куб ! 1</shortName>  <fullName>Куб ! Элемент 0 | 2010 | 1</fullName>[![](../../minus.gif)](../../#)<value>
  <v>1</v>  </value>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <n>Куб ! 2</n>  <shortName>Куб ! 2</shortName>  <fullName>Куб ! Элемент 0 | 2010 | 2</fullName>[![](../../minus.gif)](../../#)<value>
  <v>2</v>  </value>
  </it>
  </its>
  </termDescriptions>
  </GetEaxTermDescriptionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetEaxTermDescriptions" :
  {
   "mon" : "NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ",
   "tArg" :
    {
     "formulaDescriptionKey" : "1",
     "termDescriptions" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "-1",
             "id" : "",
             "n" : "",
             "shortName" : "",
             "fullName" : "",
             "value" :
              {
               "v" : ""
              }
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetEaxTermDescriptionsResult" :
  {
   "termDescriptions" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "0",
           "n" : "Куб ! 3",
           "shortName" : "Куб ! 3",
           "fullName" : "Куб ! Элемент 0 | 2010 | 3",
           "value" :
            {
             "v" : "2"
            }
          },
          {
           "k" : "1",
           "n" : "Куб ! 1",
           "shortName" : "Куб ! 1",
           "fullName" : "Куб ! Элемент 0 | 2010 | 1",
           "value" :
            {
             "v" : "1"
            }
          },
          {
           "k" : "2",
           "n" : "Куб ! 2",
           "shortName" : "Куб ! 2",
           "fullName" : "Куб ! Элемент 0 | 2010 | 2",
           "value" :
            {
             "v" : "2"
            }
          }
        ]
      }
    }
  }
}


public static GetEaxTermDescriptionsResult GetEaxTermDescriptions(string moniker, uint formulaKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetEaxTermDescriptions()
    {
        tArg = new GetEaxTermDescriptionsArg()
        {
            formulaDescriptionKey = formulaKey,
            termDescriptions = new EaxTermDescriptions()
            {
                its = new EaxTermDescription[]
                {
                    new EaxTermDescription()
                    {
                        id = string.Empty,
                        k = uint.MaxValue,
                        n = string.Empty,
                        fullName = string.Empty,
                        shortName = string.Empty,
                        value = new TypedValue()
                        {
                            v = string.Empty
                        }
                    }
                }
            }
        },
        mon = moniker
    };
    // Получение информации о термах, используемых в формулах
    var result = somClient.GetEaxTermDescriptions(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
