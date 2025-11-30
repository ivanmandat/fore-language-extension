# DashboardRelationshipsAdd: Операция

DashboardRelationshipsAdd: Операция
-


**


# DashboardRelationshipsAdd


## Синтаксис


ItEntityEx DashboardRelationshipsAdd(string mon)


## Параметры


mon. Моникёр
 для работы с отношениями, используемыми в формулах вычисляемых фактов.


## Описание


Операция DashboardRelationshipsAdd
 создания нового отношения для формул вычисляемых фактов.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Relationships»
 для работы с отношениями. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm).


Результатом операции будут общие метаданные созданного отношения.


Дальнейшая работа с отношением осуществляется с помощью операций [GetDashboardRelationship](GetDashboardRelationship.htm),
 [SetDashboardRelationship](SetDashboardRelationship.htm). Для
 удаления отношения используйте операцию [DashboardRelationshipsDelete](DashboardRelationshipsDelete.htm).


## Пример


Ниже приведён пример создания нового отношения, используемого в формулах
 вычисляемых фактов у источника информационной панели. В запросе передаётся
 моникёр для работы с отношениями. В ответе возвращается базовая информация
 о созданном отношении.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardRelationshipsAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships</mon>  </DashboardRelationshipsAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DashboardRelationshipsAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">4</k>  <id xmlns="****">ITEM</id>  <n xmlns="****">Отношение</n>  </DashboardRelationshipsAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardRelationshipsAdd" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships"
  }
}

### JSON-ответ:


{
 "DashboardRelationshipsAddResult" :
  {
   "k" : "4",
   "id" : "ITEM",
   "n" : "Отношение"
  }
}


public static ItEntityEx DashboardRelationshipsAdd(string moniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new DashboardRelationshipsAdd()
    {
        // Моникёр для работы с отношениями
        mon = moniker + "!Sources!" + sourceKey + "!Relationships"
    };
    // Создание отношения
    var result = somClient.DashboardRelationshipsAdd(tAdd);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
