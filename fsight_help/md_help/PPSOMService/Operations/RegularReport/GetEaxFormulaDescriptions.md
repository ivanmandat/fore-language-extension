# GetEaxFormulaDescriptions: Операция

GetEaxFormulaDescriptions: Операция
-


**


# GetEaxFormulaDescriptions


## Синтаксис


GetEaxFormulaDescriptionsResult GetEaxFormulaDescriptions(string
 mon, EaxFormulaDescriptions tArg)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetEaxFormulaDescriptions
 получает информацию о формулах, с помощью которых производится расчёт
 значения в ячейке таблицы.


## Комментарии


Операция актуальна, если в отчёте для расчёта дополнительно используются
 алгоритмы расчёта. Ячейка, формулы в которой необходимо получить, предварительно
 должна быть выделена с помощью операции [SetTabSheetData](../Visualizators/SetTabSheetData.htm).


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта. Моникёр может быть получен при
 выполнении операции [OpenPrxMeta](OpenPrxMeta.htm). Отчёт должен
 быть вычислен. В поле tArg задайте
 пустые значения или значения по умолчанию для тех полей, значения которых
 необходимо получить.


Результатом операции будет полученная информация о формулах.


## Пример


Ниже приведён пример получения информации о формулах, с помощью которых
 производится расчёт значения в ячейке таблицы. Предполагается, что ячейка
 с формулами уже выделена на листе отчёта. В запросе передаётся моникёр
 регламентного отчёта и список получаемых полей. В ответе возвращается
 полученная информация о формулах.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetEaxFormulaDescriptions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <blockName />
  <formulaName />
  <type>2147483647</type>[![](../../minus.gif)](../../#)<value>
  <v />
  </value>
  <formula />
  <errorText />
  </it>
  </its>
  </tArg>
  </GetEaxFormulaDescriptions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetEaxFormulaDescriptionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<formulaDescriptions xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <n>Алгоритм расчёта показателей</n>  <blockName>Блок расчёта</blockName>  <formulaName>Формула расчёта</formulaName>  <type>0</type>[![](../../minus.gif)](../../#)<value>
  <v>2</v>  </value>
  <formula>@0 = @1 * @2</formula>  <errorText />
  </it>
  </its>
  </formulaDescriptions>
  </GetEaxFormulaDescriptionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetEaxFormulaDescriptions" :
  {
   "mon" : "NBNHEPFAALBBGOAEABGIFGOOMGCKMALEJKHEEKKJBGLAMNPH!M!S!PEICKDAGAALBBGOAEIBOHAGDMIAKHEAJEPILBICMEKJJOEBAJ",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "-1",
           "id" : "",
           "n" : "",
           "blockName" : "",
           "formulaName" : "",
           "type" : "2147483647",
           "value" :
            {
             "v" : ""
            },
           "formula" : "",
           "errorText" : ""
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetEaxFormulaDescriptionsResult" :
  {
   "formulaDescriptions" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "1",
           "n" : "Алгоритм расчёта показателей",
           "blockName" : "Блок расчёта",
           "formulaName" : "Формула расчёта",
           "type" : "0",
           "value" :
            {
             "v" : "2"
            },
           "formula" : "@0 = @1 * @2",
           "errorText" : ""
          }
        ]
      }
    }
  }
}


public static GetEaxFormulaDescriptionsResult GetEaxFormulaDescriptions(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetEaxFormulaDescriptions()
    {
        tArg = new EaxFormulaDescriptions()
        {
            its = new EaxFormulaDescription[]
            {
                new EaxFormulaDescription()
                {
                    id = string.Empty,
                    k = uint.MaxValue,
                    n = string.Empty,
                    blockName = string.Empty,
                    errorText = string.Empty,
                    formula = string.Empty,
                    formulaName = string.Empty,
                    type = int.MaxValue,
                    value = new TypedValue()
                    {
                        v = string.Empty
                    }
                }
            }
        },
        mon = moniker
    };
    // Получение информации о формулах
    var result = somClient.GetEaxFormulaDescriptions(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
