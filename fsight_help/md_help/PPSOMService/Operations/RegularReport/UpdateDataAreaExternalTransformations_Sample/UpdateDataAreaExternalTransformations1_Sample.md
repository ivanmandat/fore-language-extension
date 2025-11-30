# Изменение настроек алгоритма расчёта у среза данных: Операция UpdateDataAreaExternalTransformations

Изменение настроек алгоритма расчёта у среза данных: Операция UpdateDataAreaExternalTransformations
-


**


# Изменение настроек алгоритма расчёта у среза данных


Ниже приведён пример изменения настроек алгоритма расчёта, который применяется
 к срезу данных в регламентном отчёте. В запросе передаётся моникёр для
 работы с алгоритмами расчёта у среза данных, ключ элемента, соответствующего
 алгоритму, и новые настройки. В ответе возвращается признак успешного
 изменения настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<UpdateDataAreaExternalTransformations xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FPJHEGEAILDDGOAEBNPJEFNNPNNPCPAELKNIOBNJKIPKLKBE!M!S!PDFCFFHEAILDDGOAECGFLOGBJGLOFCJHEFKJBCNDOFDGMOMON!DataArea!DataSources!1!DataSourceSlices!1!ExternalTransformations</mon>[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<action>
  <operation>Update</operation>  </action>
[![](../../../minus.gif)](../../../#)<externalTransformation>
  <k>1</k>  <saveDataOption>true</saveDataOption>  <calculationPeriodMode>2</calculationPeriodMode>  </externalTransformation>
  </it>
  </its>
  </tArg>
  </UpdateDataAreaExternalTransformations>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <UpdateDataAreaExternalTransformationsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</UpdateDataAreaExternalTransformationsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "UpdateDataAreaExternalTransformations" :
  {
   "mon" : "FPJHEGEAILDDGOAEBNPJEFNNPNNPCPAELKNIOBNJKIPKLKBE!M!S!PDFCFFHEAILDDGOAECGFLOGBJGLOFCJHEFKJBCNDOFDGMOMON!DataArea!DataSources!1!DataSourceSlices!1!ExternalTransformations",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "action" :
            {
             "operation" : "Update"
            },
           "externalTransformation" :
            {
             "k" : "1",
             "saveDataOption" : "true",
             "calculationPeriodMode" : "2"
            }
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "UpdateDataAreaExternalTransformationsResult" : "1"
}


public static bool ChangeAlgorithmWithSlice(string moniker, uint sourceKey, uint sliceKey, uint algoItemKey, int? moveTo = null)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tUpd = new UpdateDataAreaExternalTransformations()
    {
        tArg = new DataAreaExternalTransformationUpdateActions()
        {
            its = new DataAreaExternalTransformationUpdateAction[]
            {
                new DataAreaExternalTransformationUpdateAction()
                {
                    action = new DataAreaExternalTransformationUpdateActionType() { operation = DataAreaExternalTransformationUpdateActionOperation.Update, index = moveTo },
                    externalTransformation = new DataAreaExternalTransformation()
                    {
                        k = algoItemKey,
                        calculationPeriodMode = 2, // Отметка алгоритма
                        saveDataOption = true, // Сохранять данные
                    }
                }
            }
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey + "!DataSourceSlices!" + sliceKey + "!ExternalTransformations"
    };
    // Добавление алгоритма расчёта для среза данных
    var result = somClient.UpdateDataAreaExternalTransformations(tUpd);
    return result;
}


См. также:


[UpdateDataAreaExternalTransformations:
 Операция](../UpdateDataAreaExternalTransformations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
