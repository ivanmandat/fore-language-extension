# CloseRdsElement: Операция

CloseRdsElement: Операция
-


**


# CloseRdsElement


## Синтаксис


bool CloseRdsElement(RdsId id)


## Параметры


id. Моникёр
 открытого экземпляра справочника НСИ.


## Описание


Операция CloseRdsElement закрывает
 редактируемый элемент справочника НСИ.


## Комментарии


Для выполнения операции укажите в поле id
 моникёр открытого экземпляра справочника НСИ. Моникёр может быть получен
 при выполнении операции [OpenRds](OpenRds.htm). При выполнении
 операции будут освобождены ресурсы, которые выделялись при создании/редактировании
 элемента с помощью операции [CreateRdsElement](CreateRdsElement.htm).


Результатом операции будет логическое значение true,
 если освобождение ресурсов завершилось успешно.


## Пример


Ниже приведён пример освобождения ресурсов после создания/редактирования
 элемента справочника НСИ. В запросе передаётся моникёр открытого экземпляра
 справочника НСИ. В ответе возвращается признак успешного освобождения
 ресурсов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseRdsElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA</id>  </id>
  </CloseRdsElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseRdsElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseRdsElementResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseRdsElement" :
  {
   "id" :
    {
     "id" : "IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA"
    }
  }
}

### JSON-ответ:


{
 "CloseRdsElementResult" : "1"
}


public static bool CloseRdsElement(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tClose = new CloseRdsElement()
    {
        id = new RdsId() { id = moniker }
    };
    // Освобождение ресурсов
    var tResult = somClient.CloseRdsElement(tClose);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
