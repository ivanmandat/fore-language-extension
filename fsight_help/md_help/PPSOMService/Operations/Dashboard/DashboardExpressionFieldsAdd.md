# DashboardExpressionFieldsAdd: Операция

DashboardExpressionFieldsAdd: Операция
-


**


# DashboardExpressionFieldsAdd


## Синтаксис


ItEntityEx DashboardExpressionFieldsAdd(string mon,
 DashboardExpressionField tArg)


## Параметры


mon. Моникёр
 для работы с вычисляемыми фактами у источника информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция DashboardExpressionFieldsAdd
 добавляет вычисляемый факт для источника информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Expressions»,
 а в поле tArg.k значение по умолчанию.
 Моникёр может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет базовая информация о созданном
 вычисляемом факте.


Дальнейшая работа с вычисляемым фактом осуществляется с помощью операций
 [GetDashboardExpressionField](GetDashboardExpressionField.htm),
 [SetDashboardExpressionField](SetDashboardExpressionField.htm).
 Для удаления вычисляемого факта используйте операцию [DashboardExpressionFieldsDelete](DashboardExpressionFieldsDelete.htm).


## Пример


Ниже приведён пример создания нового вычисляемого факта у источника
 информационной панели. В запросе передаётся моникёр источника информационной
 панели. В ответе возвращается базовая информация о созданном вычисляемом
 факте.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardExpressionFieldsAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>-1</k>  </tArg>
  </DashboardExpressionFieldsAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DashboardExpressionFieldsAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">1</k>  <id xmlns="****">ВЫЧИСЛЯЕМЫЙ ФАКТ</id>  <n xmlns="****">Вычисляемый факт</n>  </DashboardExpressionFieldsAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardExpressionFieldsAdd" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Expressions",
   "tArg" :
    {
     "k" : "-1"
    }
  }
}

### JSON-ответ:


{
 "DashboardExpressionFieldsAddResult" :
  {
   "k" : "1",
   "id" : "ВЫЧИСЛЯЕМЫЙ ФАКТ",
   "n" : "Вычисляемый факт"
  }
}


public static ItEntityEx DashboardExpressionFieldsAdd(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new DashboardExpressionFieldsAdd()
    {
        tArg = new DashboardExpressionField()
        {
            k = uint.MaxValue
        },
        // Моникёр для работы с вычисляемыми фактами
        mon = moniker + "!Sources!" + sourceKey + "!Expressions"
    };
    // Создание вычисляемого факта
    var result = somClient.DashboardExpressionFieldsAdd(tAdd);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
