# SetSemanticLayerMeta: Операция

SetSemanticLayerMeta: Операция
-


**


# SetSemanticLayerMeta


## Синтаксис


bool SetSemanticLayerMeta(string mon, SemanticLayerMetaArg
 tArg)


## Параметры


mon. Моникёр
 открытого экземпляра модели данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetSemanticLayerMeta
 изменяет метаданные модели данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных, а в поле tArg.meta
 обновлённые метаданные. В текущей реализации операция используется для
 изменения визуальных настроек модели данных. Моникёр может быть получен
 при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение метаданных завершилось успешно.


## Пример


Ниже приведён пример изменения визуальных настроек модели данных. В
 запросе передаётся моникёр открытого экземпляра модели данных и устанавливаемые
 визуальные настройки. В ответе возвращается признак успешного применения
 изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetSemanticLayerMeta xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!S!POFIOKJAHPABDGOAEHEMNLOGBNPHIANDECKECPPGGIBIEIJCA</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
  <viewSettings>{"version":"2","isHiddenFieldsVisible":true,"previewTableHeight":0.48329355608591884,"targetPreviewTableHeight":1,"previewTableAutoUpdate":true,"sourcesDropdowns":{"1":{"expanded":false},"2":{"expanded":false}},"visibleArea":{"x":0,"y":0,"height":838,"width":990,"offsetX":320,"offsetY":48},"zoom":1}</viewSettings>  </meta>
  </tArg>
  </SetSemanticLayerMeta>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetSemanticLayerMetaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetSemanticLayerMetaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetSemanticLayerMeta" :
  {
   "mon" : "OBNIHFAHPABDGOAEGDPOIOEEEEFKFMOEBLJPNILDEGIADEAK!M!S!POFIOKJAHPABDGOAEHEMNLOGBNPHIANDECKECPPGGIBIEIJCA",
   "tArg" :
    {
     "meta" :
      {
       "viewSettings" : "{"version":"2","isHiddenFieldsVisible":true,"previewTableHeight":0.48329355608591884,"targetPreviewTableHeight":1,"previewTableAutoUpdate":true,"sourcesDropdowns":{"1":{"expanded":false},"2":{"expanded":false}},"visibleArea":{"x":0,"y":0,"height":838,"width":990,"offsetX":320,"offsetY":48},"zoom":1}"
      }
    }
  }
}

### JSON-ответ:


{
 "SetSemanticLayerMetaResult" : "1"
}


public static bool SetSemanticLayerMeta(string moniker, string newViewSettings)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetSemanticLayerMeta()
    {
        tArg = new SemanticLayerMetaArg()
        {
            meta = new SemanticLayer()
            {
                viewSettings = newViewSettings
            }
        },
        // Моникёр открытого экземпляра модели данных
        mon = moniker
    };
    // Изменение информации о модели данных
    var result = somClient.SetSemanticLayerMeta(tSet);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
