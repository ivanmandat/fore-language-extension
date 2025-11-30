# DashboardExpressionFieldsDelete: Операция

DashboardExpressionFieldsDelete: Операция
-


**


# DashboardExpressionFieldsDelete


## Синтаксис


bool DashboardExpressionFieldsDelete(string mon,
 OpItemKey tArg)


## Параметры


mon. Моникёр
 для работы с вычисляемыми фактами у источника информационной панели.


tArg. Ключ удаляемого вычисляемого
 факта.


## Описание


Операция DashboardExpressionFieldsDelete
 удаляет вычисляемый факт у источника информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Expressions»,
 а в поле tArg.k ключ удаляемого
 вычисляемого факта. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm). Ключ может быть получен
 в результате операции [GetDashboardExpressionFields](GetDashboardExpressionFields.htm)
 или [DashboardExpressionFieldsAdd](DashboardExpressionFieldsAdd.htm).


Результатом выполнения операции будет логическое значение true,
 если удаление вычисляемого факта завершилось успешно.


## Пример


Ниже приведён пример удаления вычисляемого факта у источника информационной
 панели. В запросе передаётся моникёр источника информационной панели и
 ключ удаляемого факта. В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardExpressionFieldsDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>1</k>  </tArg>
  </DashboardExpressionFieldsDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardExpressionFieldsDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardExpressionFieldsDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardExpressionFieldsDelete" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions",
   "tArg" :
    {
     "k" : "1"
    }
  }
}

### JSON-ответ:


{
 "DashboardExpressionFieldsDeleteResult" : "1"
}


public static bool DashboardExpressionFieldsDelete(string moniker, uint sourceKey, uint calcFactKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DashboardExpressionFieldsDelete()
    {
        tArg = new OpItemKey() { k = calcFactKey },
        // Моникёр для работы с вычисляемыми фактами
        mon = moniker + "!Sources!" + sourceKey + "!Expressions"
    };
    // Удаление вычисляемого факта
    var result = somClient.DashboardExpressionFieldsDelete(tDel);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
