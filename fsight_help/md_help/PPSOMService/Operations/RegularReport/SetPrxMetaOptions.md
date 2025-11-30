# SetPrxMetaOptions: Операция

SetPrxMetaOptions: Операция
-


**


# SetPrxMetaOptions


## Синтаксис


bool SetPrxMetaOptions(string mon, PrxMetaOptions
 tArg)


## Параметры


mon. Моникёр
 для работы с настройками регламентного отчёта.


tArg. Настройки регламентного
 отчёта, которые необходимо изменить.


## Описание


Операция SetPrxMetaOptions изменяет
 настройки регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Options».
 В поле tArg задайте значения для
 настроек, которые необходимо изменить. Моникёр может быть получен при
 выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек регламентного отчёта. В запросе
 передаётся моникёр для работы с настройками регламентного отчёта и признак
 необходимости скрыть вкладки листов. В ответе приходит признак успешного
 применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPrxMetaOptions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Options</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <displayTabs>false</displayTabs>  </tArg>
  </SetPrxMetaOptions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPrxMetaOptionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPrxMetaOptionsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPrxMetaOptions" :
  {
   "mon" : "S1!M!S!P1!Options",
   "tArg" :
    {
     "displayTabs" : "false"
    }
  }
}

### JSON-ответ:


{
 "SetPrxMetaOptionsResult" : "1"
}


public static bool SetPrxMetaOptions(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPrxMetaOptions()
    {
        tArg = new PrxMetaOptions()
        {
            displayTabs = false,
        },
        mon = moniker + "!Options"
    };
    //Изменение настроек регламентного отчёта
    var result = somClient.SetPrxMetaOptions(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
