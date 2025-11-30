# GetSemanticLayerMeta: Операция

GetSemanticLayerMeta: Операция
-


**


# GetSemanticLayerMeta


## Синтаксис


SemanticLayerMetaResult GetSemanticLayerMeta(string
 mon, SemanticLayerMetaArg tArg)


## Параметры


mon. Моникёр
 открытого экземпляра модели данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetSemanticLayerMeta
 получает метаданные модели данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных, а в поле tArg.meta
 пустые значения или значения по умолчанию для тех полей с метаданными,
 значения которых необходимо получить. Моникёр может быть получен при выполнении
 операции [OpenSemanticLayer](OpenSemanticLayer.htm).


Результатом выполнения операции будут полученные метаданные модели данных.


## Пример


Ниже приведён пример получения списка источников данных и визуальных
 настроек модели данных. В запросе передаётся моникёр открытого экземпляра
 модели данных и список получаемых полей. В ответе возвращается полученная
 информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetSemanticLayerMeta xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!S!POFIOKJAHPABDGOAEHEMNLOGBNPHIANDECKECPPGGIBIEIJCA</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<sources>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <driver />
  <customName />
  <DBMSName />
  </it>
  </its>
  </sources>
  <viewSettings />
  </meta>
  </tArg>
  </GetSemanticLayerMeta>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSemanticLayerMetaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!S!POFIOKJAHPABDGOAEHEMNLOGBNPHIANDECKECPPGGIBIEIJCA</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<sources>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>СУБЪЕКТЫ</id>  <n>Субъекты</n>  <driver />
  <customName>Субъекты</customName>  <DBMSName />
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>ОБЪЕКТЫ</id>  <n>Объекты</n>  <driver />
  <customName>Объекты</customName>  <DBMSName />
  </it>
  </its>
  </sources>
  <viewSettings>{"version":"2","isHiddenFieldsVisible":true,"previewTableHeight":0.48329355608591884,"targetPreviewTableHeight":1,"previewTableAutoUpdate":true,"sourcesDropdowns":{"1":{"expanded":false},"2":{"expanded":false}},"visibleArea":{"x":0,"y":0,"height":838,"width":990,"offsetX":320,"offsetY":48},"zoom":1}</viewSettings>  </meta>
  </GetSemanticLayerMetaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSemanticLayerMeta" :
  {
   "mon" : "OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!S!POFIOKJAHPABDGOAEHEMNLOGBNPHIANDECKECPPGGIBIEIJCA",
   "tArg" :
    {
     "meta" :
      {
       "sources" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "-1",
               "id" : "",
               "n" : "",
               "driver" : "",
               "customName" : "",
               "DBMSName" : ""
              }
            ]
          }
        },
       "viewSettings" : ""
      }
    }
  }
}

### JSON-ответ:


{
 "GetSemanticLayerMetaResult" :
  {
   "id" :
    {
     "id" : "OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!S!POFIOKJAHPABDGOAEHEMNLOGBNPHIANDECKECPPGGIBIEIJCA"
    },
   "meta" :
    {
     "sources" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "СУБЪЕКТЫ",
             "n" : "Субъекты",
             "driver" : "",
             "customName" : "Субъекты",
             "DBMSName" : ""
            },
            {
             "k" : "2",
             "id" : "ОБЪЕКТЫ",
             "n" : "Объекты",
             "driver" : "",
             "customName" : "Объекты",
             "DBMSName" : ""
            }
          ]
        }
      },
     "viewSettings" : "{"version":"2","isHiddenFieldsVisible":true,"previewTableHeight":0.48329355608591884,"targetPreviewTableHeight":1,"previewTableAutoUpdate":true,"sourcesDropdowns":{"1":{"expanded":false},"2":{"expanded":false}},"visibleArea":{"x":0,"y":0,"height":838,"width":990,"offsetX":320,"offsetY":48},"zoom":1}"
    }
  }
}


public static SemanticLayerMetaResult GetSemanticLayerMeta(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSemanticLayerMeta()
    {
        tArg = new SemanticLayerMetaArg()
        {
            meta = new SemanticLayer()
            {
                sources = new SemanticLayerSources()
                {
                    its = new SemanticLayerSource[]
                    {
                        new SemanticLayerSource()
                        {
                            k = uint.MaxValue,
                            id = string.Empty,
                            n = string.Empty,
                            customName = string.Empty,
                            DBMSName = string.Empty,
                            driver = string.Empty,
                        }
                    }
                },
                viewSettings = string.Empty,
            }
        },
        // Моникёр открытого экземпляра модели данных
        mon = moniker
    };
    // Получение информации о модели данных
    var result = somClient.GetSemanticLayerMeta(tGet);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
