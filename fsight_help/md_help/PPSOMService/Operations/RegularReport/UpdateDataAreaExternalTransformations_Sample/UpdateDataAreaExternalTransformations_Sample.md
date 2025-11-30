# Добавление алгоритма расчёта для среза данных: Операция UpdateDataAreaExternalTransformations

Добавление алгоритма расчёта для среза данных: Операция UpdateDataAreaExternalTransformations
-


**


# Добавление алгоритма расчёта для среза данных


Ниже приведён пример добавления алгоритма расчёта для среза данных в
 регламентном отчёте. В запросе передаётся моникёр для работы с алгоритмами
 расчёта у среза данных, описание добавляемого алгоритма и его настройки
 работы. В ответе возвращается признак успешного добавления алгоритма.


	SOAP
	 JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<UpdateDataAreaExternalTransformations xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FPJHEGEAILDDGOAEBNPJEFNNPNNPCPAELKNIOBNJKIPKLKBE!M!S!PDFCFFHEAILDDGOAECGFLOGBJGLOFCJHEFKJBCNDOFDGMOMON!DataArea!DataSources!1!DataSourceSlices!1!ExternalTransformations</mon>[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<action>
  <operation>Add</operation>  </action>
[![](../../../minus.gif)](../../../#)<externalTransformation>
  <k>-1</k>  <enabled>true</enabled>  <saveDataOption>false</saveDataOption>  <calculationPeriodMode>0</calculationPeriodMode>  <calculationMode>1</calculationMode>[![](../../../minus.gif)](../../../#)<algorithm isShortcut="**false**" isLink="**false**" ds="****" hf="**false**" ver="**4**">
  <i>OBJ339507</i>  <n>Алгоритм расчёта показателей</n>  <k>339507</k>  <c>268033</c>  <p>339494</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  <trackElementDependents>false</trackElementDependents>  <isPermanent>true</isPermanent>  <isTemp>false</isTemp>  </algorithm>
  </externalTransformation>
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
             "operation" : "Add"
            },
           "externalTransformation" :
            {
             "k" : "-1",
             "enabled" : "true",
             "saveDataOption" : "false",
             "calculationPeriodMode" : "0",
             "calculationMode" : "1",
             "algorithm" :
              {
               "@ds" : "",
               "@isShortcut" : "false",
               "@isLink" : "false",
               "@ver" : "4",
               "@hf" : "false",
               "i" : "OBJ339507",
               "n" : "Алгоритм расчёта показателей",
               "k" : "339507",
               "c" : "268033",
               "p" : "339494",
               "h" : "false",
               "hasPrv" : "false",
               "ic" : "false",
               "trackElementDependents" : "false",
               "isPermanent" : "true",
               "isTemp" : "false"
              }
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


public static bool AddAlgorithmForSlice(string moniker, uint sourceKey, uint sliceKey, Ob newAlg)
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
                    action = new DataAreaExternalTransformationUpdateActionType() { operation = DataAreaExternalTransformationUpdateActionOperation.Add },
                    externalTransformation = new DataAreaExternalTransformation()
                    {
                        k = uint.MaxValue,
                        enabled = true,
                        algorithm = newAlg,
                        calculationMode = 1, // На изменение данных
                        calculationPeriodMode = 0, // Пересечение отметок алгоритма и среза
                        saveDataOption = false // Не сохранять данные
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
