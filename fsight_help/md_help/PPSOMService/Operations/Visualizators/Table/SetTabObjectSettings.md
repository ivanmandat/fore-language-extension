# SetTabObjectSettings: Операция

SetTabObjectSettings: Операция
-


**


# SetTabObjectSettings


## Синтаксис


bool SetTabObjectSettings(TabSheetId tTabSheet,
 TabObjectSettingsArg tArg)


## Параметры


tTabSheet. Моникёр
 листа.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetTabObjectSettings
 изменяет настройки объектов таблицы.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр листа, на котором расположены объекты, а в поле tArg
 устанавливаемые настройки объектов. Моникёр может быть сформирован на
 основании моникёра открытого экземпляра объекта, с которым осуществляется
 работа.


Результатом выполнения операции будет логическое значение true,
 если изменение настроек объектов завершилось успешно.


## Пример


Ниже приведён пример изменения настроек диаграммы, расположенной на
 листе регламентного отчёта. В запросе передаётся моникёр листа отчёта
 и устанавливаемые настройки диаграммы. В ответе возвращаются признак успешного
 изменения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetTabObjectSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>GELCPBJDAHMNFOAEOGANNOOIMCBDPMLEFKAFDIFHOKGGDEFD!M!S!PLBMFNEJDAHMNFOAEKCMNMAJAJPHAFBGEILMEHGGEFPOMHMFJ!Sheets!1</id>  </tTabSheet>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <tot>Диаграмма</tot>  <tomm>5</tomm>  <toam>2</toam>  <prn>false</prn>  <id>PrxChart1</id>  </it>
  </its>
  </tArg>
  </SetTabObjectSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetTabObjectSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetTabObjectSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTabObjectSettings" :
  {
   "tTabSheet" :
    {
     "id" : "GELCPBJDAHMNFOAEOGANNOOIMCBDPMLEFKAFDIFHOKGGDEFD!M!S!PLBMFNEJDAHMNFOAEKCMNMAJAJPHAFBGEILMEHGGEFPOMHMFJ!Sheets!1"
    },
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "tot" : "Диаграмма",
           "tomm" : "5",
           "toam" : "2",
           "prn" : "false",
           "id" : "PrxChart1"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetTabObjectSettingsResult" : "1"
}


public static bool SetTabObjectSettings(string reportMoniker, string sheetKey, string objectId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetTabObjectSettings()
    {
        tArg = new TabObjectSettingsArg()
        {
            its = new TabObjectSettingsItem[]
            {
                new TabObjectSettingsItem()
                {
                    id = objectId,
                    prn = false,
                    tomm = 5, // Перемещение объекта вместе с ячейками
                    toam = 2, // Активация на двойной щелчок по объекту
                    tot = "Диаграмма"
                }
            }
        },
        tTabSheet = new TabSheetId() { id = reportMoniker + "!Sheets!" + sheetKey}
    };
    // Изменение настроек объекта таблицы
    var result = somClient.SetTabObjectSettings(tSet);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
