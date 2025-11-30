# GetDashboardExpressionFields: Операция

GetDashboardExpressionFields: Операция
-


**


# GetDashboardExpressionFields


## Синтаксис


DashboardExpressionFields GetDashboardExpressionFields(string
 mon, DashboardExpressionFields tArg)


## Параметры


mon. Моникёр
 для работы с вычисляемыми фактами у источника информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDashboardExpressionFields
 получает список вычисляемых фактов у источника информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Expressions»,
 а в поле tArg пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Для коллекций укажите один элемент. Моникёр может быть получен при выполнении
 операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет полученная информация о вычисляемых
 фактах.


## Пример


Ниже приведён пример получения списка вычисляемых фактов и их настроек.
 В запросе передаётся моникёр для работы с вычисляемыми фактами и список
 настроек, значения которых необходимо получить. В ответе возвращаются
 полученные настройки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDashboardExpressionFields xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <valid>false</valid>  <calendarLevel>None</calendarLevel>  <calcMethod>BySelection</calcMethod>  <expression />
  </it>
  </its>
  </tArg>
  </GetDashboardExpressionFields>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDashboardExpressionFieldsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>ВЫЧИСЛЯЕМЫЙ ФАКТ</id>  <n>Расчётное значение</n>  <valid>1</valid>  <calendarLevel>Year</calendarLevel>  <calcMethod>BySelection</calcMethod>  <expression>@[FIELD 3]/2</expression>  </it>
  </its>
  </GetDashboardExpressionFieldsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDashboardExpressionFields" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "-1",
           "id" : "",
           "n" : "",
           "valid" : "false",
           "calendarLevel" : "None",
           "calcMethod" : "BySelection",
           "expression" : ""
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetDashboardExpressionFieldsResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "k" : "1",
         "id" : "ВЫЧИСЛЯЕМЫЙ ФАКТ",
         "n" : "Расчётное значение",
         "valid" : "1",
         "calendarLevel" : "Year",
         "calcMethod" : "BySelection",
         "expression" : "@[FIELD 3]\/2"
        }
      ]
    }
  }
}


public static DashboardExpressionFields GetDashboardExpressionFields(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDashboardExpressionFields()
    {
        tArg = new DashboardExpressionFields()
        {
            its = new DashboardExpressionField[]
            {
                new DashboardExpressionField()
                {
                    k = uint.MaxValue,
                    id = string.Empty,
                    n = string.Empty,
                    calcMethod = new CubeCalcMethod(),
                    calendarLevel = new DimCalendarLvl(),
                    expression = string.Empty,
                    valid = new bool()
                }
            }
        },
        // Моникёр для работы с вычисляемыми фактами
        mon = moniker + "!Sources!" + sourceKey + "!Expressions"
    };
    // Получение списка вычисляемых фактов
    var result = somClient.GetDashboardExpressionFields(tGet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
