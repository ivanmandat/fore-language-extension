# GetDashboardExpressionField: Операция

GetDashboardExpressionField: Операция
-


**


# GetDashboardExpressionField


## Синтаксис


DashboardExpressionField GetDashboardExpressionField(string
 mon, DashboardExpressionField tArg)


## Параметры


mon. Моникёр
 для работы с вычисляемым фактом у источника информационной панели.


tArg. Настройки вычисляемого
 факта, которые необходимо получить.


## Описание


Операция GetDashboardExpressionField
 получает настройки вычисляемого факта у источника информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Expressions!ключ
 выч.факта», а в поле tArg
 пустые значения или значения по умолчанию для тех полей, значения которых
 необходимо получить. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будут полученные настройки вычисляемого
 факта.


## Пример


Ниже приведён пример получения настроек вычисляемого факта. В запросе
 передаётся моникёр вычисляемого факта и список настроек, значения которых
 необходимо получить. В ответе возвращаются полученные значения настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDashboardExpressionField xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>1</k>  <n />
  <valid>false</valid>[![](../../minus.gif)](../../#)<customFormat>
  <format />
  <all>false</all>  </customFormat>
  <dataType>2147483647</dataType>  <expressionType>2147483647</expressionType>  <calendarLevel>None</calendarLevel>  <includeInSelection>false</includeInSelection>  <calcMethod>BySelection</calcMethod>  <expression />
  <parentFieldId />
  </tArg>
  </GetDashboardExpressionField>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDashboardExpressionFieldResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">1</k>  <id xmlns="****">ВЫЧИСЛЯЕМЫЙ ФАКТ</id>  <n xmlns="****">Расчётное значение</n>  <valid xmlns="****">1</valid>[![](../../minus.gif)](../../#)<customFormat xmlns="****">
  <format />
  <all>0</all>  </customFormat>
  <dataType xmlns="****">8</dataType>  <expressionType xmlns="****">0</expressionType>  <calendarLevel xmlns="****">Year</calendarLevel>  <includeInSelection xmlns="****">0</includeInSelection>  <calcMethod xmlns="****">BySelection</calcMethod>  <expression xmlns="****">@[FIELD 3]/2</expression>  <parentFieldId xmlns="****">FIELD 3</parentFieldId>  </GetDashboardExpressionFieldResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDashboardExpressionField" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions!1",
   "tArg" :
    {
     "k" : "1",
     "n" : "",
     "valid" : "false",
     "customFormat" :
      {
       "format" : "",
       "all" : "false"
      },
     "dataType" : "2147483647",
     "expressionType" : "2147483647",
     "calendarLevel" : "None",
     "includeInSelection" : "false",
     "calcMethod" : "BySelection",
     "expression" : "",
     "parentFieldId" : ""
    }
  }
}

### JSON-ответ:


{
 "GetDashboardExpressionFieldResult" :
  {
   "k" : "1",
   "id" : "ВЫЧИСЛЯЕМЫЙ ФАКТ",
   "n" : "Расчётное значение",
   "valid" : "1",
   "customFormat" :
    {
     "format" : "",
     "all" : "0"
    },
   "dataType" : "8",
   "expressionType" : "0",
   "calendarLevel" : "Year",
   "includeInSelection" : "0",
   "calcMethod" : "BySelection",
   "expression" : "@[FIELD 3]\/2",
   "parentFieldId" : "FIELD 3"
  }
}


public static DashboardExpressionField GetDashboardExpressionField(string moniker, uint sourceKey, uint calcFactKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDashboardExpressionField()
    {
        tArg = new DashboardExpressionField()
        {
            calcMethod = new CubeCalcMethod(),
            calendarLevel = new DimCalendarLvl(),
            customFormat = new SemanticLayerCustomFormat()
            {
                all = new bool(),
                format = string.Empty
            },
            dataType = int.MaxValue,
            expression = string.Empty,
            expressionType = int.MaxValue,
            includeInSelection = new bool(),
            k = calcFactKey,
            n = string.Empty,
            parentFieldId = string.Empty,
            valid = new bool()
        },
        // Моникёр для работы с вычисляемым фактом
        mon = moniker + "!Sources!" + sourceKey + "!Expressions!" + calcFactKey
    };
    // Получение настроек вычисляемого факта
    var result = somClient.GetDashboardExpressionField(tGet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
