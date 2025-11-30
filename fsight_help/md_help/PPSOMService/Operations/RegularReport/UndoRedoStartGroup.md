# UndoRedoStartGroup: Операция

UndoRedoStartGroup: Операция
-


**


# UndoRedoStartGroup


## Синтаксис


bool UndoRedoStartGroup(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


## Описание


Операция UndoRedoStartGroup
 начинает группировку действий пользователя для стека изменений.


## Комментарии


После выполнения операции UndoRedoStartGroup
 и до выполнения операции [UndoRedoEndGroup](UndoRedoEndGroup.htm)
 все действия, которые выполняет пользователь, в стеке изменений будут
 фиксироваться как одно действие. Отмена/повтор этого сгруппированного
 действия приведёт к выполнению цепочки операций, необходимых для приведения
 отчёта к необходимому виду.


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта. Моникёр может быть
 получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение true,
 если начало группировки действий завершилось успешно.


## Пример


Ниже приведён пример начала группировки действий пользователя в регламентном
 отчёте для стека изменений. В запросе передаётся моникёр открытого экземпляра
 регламентного отчёта. В ответе возвращается признак успешного начала группировки
 действий.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<UndoRedoStartGroup xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">PANFAFPCDBFFGOAEONGMBAFDMGMCNOGEGKDDOBOFJIOIKHJP!M!S!PACDBAKPCDBFFGOAECNKDFEKGKPOJNMFEGLEPJFHMJJJCLIOM</mon>  </UndoRedoStartGroup>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <UndoRedoStartGroupResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</UndoRedoStartGroupResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "UndoRedoStartGroup" :
  {
   "mon" : "PANFAFPCDBFFGOAEONGMBAFDMGMCNOGEGKDDOBOFJIOIKHJP!M!S!PACDBAKPCDBFFGOAECNKDFEKGKPOJNMFEGLEPJFHMJJJCLIOM"
  }
}

### JSON-ответ:


{
 "UndoRedoStartGroupResult" : "1"
}


public static bool UndoRedoStartGroup(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGroup = new UndoRedoStartGroup()
    {
        mon = moniker
    };
    // Начало группировки действий для стека изменений.
    var result = somClient.UndoRedoStartGroup(tGroup);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
