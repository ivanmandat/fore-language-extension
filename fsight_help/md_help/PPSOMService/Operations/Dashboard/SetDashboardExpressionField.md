# SetDashboardExpressionField: Операция

SetDashboardExpressionField: Операция
-


**


# SetDashboardExpressionField


## Синтаксис


bool SetDashboardExpressionField(string mon, DashboardExpressionField
 tArg)


## Параметры


mon. Моникёр
 для работы с вычисляемым фактом у источника информационной панели.


tArg. Настройки вычисляемого
 факта, которые необходимо установить.


## Описание


Операция SetDashboardExpressionField
 изменяет настройки вычисляемого факта у источника информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Expressions!ключ
 выч.факта», а в поле tArg
 настройки вычисляемого факта, которые необходимо применить. Моникёр может
 быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек вычисляемого факта. В запросе
 передаётся моникёр вычисляемого факта и список задаваемых настроек. В
 ответе возвращаются признак успешного применения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDashboardExpressionField xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>1</k>  <n>Расчётное значение</n>  <calendarLevel>Year</calendarLevel>  <calcMethod>BySelection</calcMethod>  <expression>@[FIELD 3]/2</expression>  </tArg>
  </SetDashboardExpressionField>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDashboardExpressionFieldResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDashboardExpressionFieldResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDashboardExpressionField" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions!1",
   "tArg" :
    {
     "k" : "1",
     "n" : "Расчётное значение",
     "calendarLevel" : "Year",
     "calcMethod" : "BySelection",
     "expression" : "@[FIELD 3]\/2"
    }
  }
}

### JSON-ответ:


{
 "SetDashboardExpressionFieldResult" : "1"
}


public static bool SetDashboardExpressionField(string moniker, uint sourceKey, uint calcFactKey, string newExpression)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDashboardExpressionField()
    {
        tArg = new DashboardExpressionField()
        {
            k = calcFactKey,
            calcMethod = CubeCalcMethod.BySelection,
            calendarLevel = DimCalendarLvl.Year,
            expression = newExpression,
            n = "Расчётное значение"
        },
        // Моникёр для работы с вычисляемыми фактами
        mon = moniker + "!Sources!" + sourceKey + "!Expressions!" + calcFactKey
    };
    // Изменение вычисляемого факта
    var result = somClient.SetDashboardExpressionField(tSet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
