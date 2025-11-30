# SetFormulaErrorOptions: Операция

SetFormulaErrorOptions: Операция
-


**


# SetFormulaErrorOptions


## Синтаксис


bool SetFormulaErrorOptions(string mon, FormulaErrorOptions
 tArg)


## Параметры


mon. Моникёр
 для работы с настройками формул отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetFormulaErrorOptions
 изменяет настройки формул регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Options!ErrorChecking»
 для работы с настройками формул, а в поле tArg
 задайте те настройки, которые необходимо установить. Моникёр может быть
 получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек формул регламентного отчёта.
 В запросе передаётся моникёр для работы с настройками формул регламентного
 отчёта и устанавливаемые значения настроек. В ответе возвращается признак
 успешного применения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetFormulaErrorOptions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LFHLAJJGFJJNFOAEOHLLHDAIEIAGJHHELLMOKBONCJGBCELE!M!S!PNLMGHCKGFJJNFOAEPDODPHGHNCFOELOELJIHLDOGENABJMFK!Options!ErrorChecking</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<ic>
  <enable>true</enable>  <cm>0.0001</cm>  <mic>200</mic>  </ic>
[![](../../minus.gif)](../../#)<ei>
  <enable>true</enable>  <c>#FF0000</c>  <evtt>0</evtt>  <nat>true</nat>  </ei>
  </tArg>
  </SetFormulaErrorOptions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetFormulaErrorOptionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetFormulaErrorOptionsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetFormulaErrorOptions" :
  {
   "mon" : "LFHLAJJGFJJNFOAEOHLLHDAIEIAGJHHELLMOKBONCJGBCELE!M!S!PNLMGHCKGFJJNFOAEPDODPHGHNCFOELOELJIHLDOGENABJMFK!Options!ErrorChecking",
   "tArg" :
    {
     "ic" :
      {
       "enable" : "true",
       "cm" : "0.0001",
       "mic" : "200"
      },
     "ei" :
      {
       "enable" : "true",
       "c" : "#FF0000",
       "evtt" : "0",
       "nat" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetFormulaErrorOptionsResult" : "1"
}


public static bool SetFormulaErrorOptions(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetFormulaErrorOptions()
    {
        tArg = new FormulaErrorOptions()
        {
            ic = new IterativeCalculations()
            {
                enable = true,
                mic = 200,
                cm = 0.0001
            },
            ei = new ErrorIndication()
            {
                enable = true,
                c = "#FF0000",
                evtt = 0,
                nat = true
            }
        },
        mon = moniker + "!Options!ErrorChecking"
    };
    // Изменение настроек измерения
    var result = somClient.SetFormulaErrorOptions(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
