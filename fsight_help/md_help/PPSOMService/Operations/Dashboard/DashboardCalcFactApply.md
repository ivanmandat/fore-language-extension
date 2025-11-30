# DashboardCalcFactApply: Операция

DashboardCalcFactApply: Операция
-


**


# DashboardCalcFactApply


## Синтаксис


bool DashboardCalcFactApply(string mon, DashboardCalcFactApplyArg
 tArg)


## Параметры


mon. Моникёр
 источника информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция DashboardCalcFactApply
 применяет изменения, внесённые в формулу вычисляемого факта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника», а в поле
 tArg формулу, которую необходимо
 задать для вычисляемого факта. Моникёр может быть получен при выполнении
 операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример применения изменений, внесённых в формулу вычисляемого
 факта. В запросе передаётся моникёр источника информационной панели, ключ
 вычисляемого факта и новая формула. В ответе возвращается признак успешного
 применение изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardCalcFactApply xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<expression>
  <k>1</k>  <formula>@[FIELD 3]/2</formula>  </expression>
  </tArg>
  </DashboardCalcFactApply>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardCalcFactApplyResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardCalcFactApplyResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardCalcFactApply" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1",
   "tArg" :
    {
     "expression" :
      {
       "k" : "1",
       "formula" : "@[FIELD 3]\/2"
      }
    }
  }
}

### JSON-ответ:


{
 "DashboardCalcFactApplyResult" : "1"
}


public static bool DashboardCalcFactApply(string moniker, uint sourceKey, uint calcFactKey, string newExpression)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tApply = new DashboardCalcFactApply()
    {
        tArg = new DashboardCalcFactApplyArg()
        {
            expression = new DashboardExpression()
            {
                formula = newExpression,
                k = (int)calcFactKey
            }
        },
        // Моникёр для работы с отношениями
        mon = moniker + "!Sources!" + sourceKey
    };
    // Отмена изменений в настройках отношений
    var result = somClient.DashboardCalcFactApply(tApply);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
