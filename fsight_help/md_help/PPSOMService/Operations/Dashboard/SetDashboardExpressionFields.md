# SetDashboardExpressionFields: Операция

SetDashboardExpressionFields: Операция
-


**


# SetDashboardExpressionFields


## Синтаксис


bool SetDashboardExpressionFields(string mon, DashboardExpressionFields
 tArg)


## Параметры


mon. Моникёр
 для работы с вычисляемыми фактами у источника информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDashboardExpressionFields
 изменяет настройки списка вычисляемых фактов у источника информационной
 панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Expressions»,
 а в поле tArg настройки коллекции
 вычисляемых фактов. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек списка вычисляемых фактов. В
 запросе передаётся моникёр для работы с вычисляемыми фактами и список
 вычисляемых фактов с задаваемыми настройками. В ответе возвращаются признак
 успешного применения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDashboardExpressionFields xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>ВЫЧИСЛЯЕМЫЙ ФАКТ</id>  <n>Расчётное значение</n>  <valid>true</valid>  <calendarLevel>Year</calendarLevel>  <calcMethod>BySelection</calcMethod>  <expression>@[FIELD 3]/2</expression>  </it>
  </its>
  </tArg>
  </SetDashboardExpressionFields>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDashboardExpressionFieldsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDashboardExpressionFieldsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDashboardExpressionFields" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "1",
           "id" : "ВЫЧИСЛЯЕМЫЙ ФАКТ",
           "n" : "Расчётное значение",
           "valid" : "true",
           "calendarLevel" : "Year",
           "calcMethod" : "BySelection",
           "expression" : "@[FIELD 3]\/2"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetDashboardExpressionFieldsResult" : "1"
}


public static bool SetDashboardExpressionFields(string moniker, uint sourceKey, DashboardExpressionField[] calcFields)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDashboardExpressionFields()
    {
        tArg = new DashboardExpressionFields()
        {
            its = calcFields
        },
        // Моникёр для работы с вычисляемыми фактами
        mon = moniker + "!Sources!" + sourceKey + "!Expressions"
    };
    // Изменение списка вычисляемых фактов
    var result = somClient.SetDashboardExpressionFields(tSet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
