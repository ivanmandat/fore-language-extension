# GetFormulaErrorOptions: Операция

GetFormulaErrorOptions: Операция
-


**


# GetFormulaErrorOptions


## Синтаксис


FormulaErrorOptions GetFormulaErrorOptions(string
 mon, FormulaErrorOptions tArg)


## Параметры


mon. Моникёр
 для работы с настройками формул отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetFormulaErrorOptions
 получает настройки формул регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Options!ErrorChecking»
 для работы с настройками формул, а в поле tArg
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить. Моникёр может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будут запрошенные настройки формул.


## Пример


Ниже приведён пример получения настроек индикации ошибок в формулах
 регламентного отчёта. В запросе передаётся моникёр для работы с настройками
 формул регламентного отчёта и список настроек, значения которых необходимо
 получить. В ответе возвращаются полученные значения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetFormulaErrorOptions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LFHLAJJGFJJNFOAEOHLLHDAIEIAGJHHELLMOKBONCJGBCELE!M!S!PNLMGHCKGFJJNFOAEPDODPHGHNCFOELOELJIHLDOGENABJMFK!Options!ErrorChecking</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<ei>
  <enable>false</enable>  <c />
  <evtt>2147483647</evtt>  <nat>false</nat>  </ei>
  </tArg>
  </GetFormulaErrorOptions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetFormulaErrorOptionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<ei xmlns="****">
  <enable>1</enable>  <c>#008000</c>  <evtt>1</evtt>  <nat>1</nat>  </ei>
  </GetFormulaErrorOptionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetFormulaErrorOptions" :
  {
   "mon" : "LFHLAJJGFJJNFOAEOHLLHDAIEIAGJHHELLMOKBONCJGBCELE!M!S!PNLMGHCKGFJJNFOAEPDODPHGHNCFOELOELJIHLDOGENABJMFK!Options!ErrorChecking",
   "tArg" :
    {
     "ei" :
      {
       "enable" : "false",
       "c" : "",
       "evtt" : "2147483647",
       "nat" : "false"
      }
    }
  }
}

### JSON-ответ:


{
 "GetFormulaErrorOptionsResult" :
  {
   "ei" :
    {
     "enable" : "1",
     "c" : "#008000",
     "evtt" : "1",
     "nat" : "1"
    }
  }
}


public static FormulaErrorOptions GetFormulaErrorOptions(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetFormulaErrorOptions()
    {
        tArg = new FormulaErrorOptions()
        {
            ei = new ErrorIndication()
            {
                enable = new bool(),
                c = string.Empty,
                evtt = int.MaxValue,
                nat = new bool()
            }
        },
        mon = moniker + "!Options!ErrorChecking"
    };
    // Получение настроек измерения
    var result = somClient.GetFormulaErrorOptions(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
