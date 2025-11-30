# CreateRdsElement: Операция

CreateRdsElement: Операция
-


**


# CreateRdsElement


## Синтаксис


CreateRdsElementResult CreateRdsElement(RdsId tRds,
 CreateRdsElementArg tArg)


## Параметры


tRds. Моникёр
 открытого экземпляра справочника НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция CreateRdsElement создаёт/редактирует
 элемент в справочнике НСИ.


## Комментарии


Для выполнения операции укажите в поле tRds
 моникёр открытого экземпляра справочника НСИ, а в поле tArg
 параметры создания/редактирования элемента. Моникёр может быть
 получен при выполнении операции [OpenRds](OpenRds.htm).


Если создаётся корневой элемент, то в поле tArg
 ничего указывать не требуется. Если создаётся подэлемент для какого-либо
 элемента, то укажите ключ родительского элемента в поле tArg.p.
 Если осуществляется редактирование существующего элемента, то укажите
 его ключ в поле tArg.k.


Результатом операции будет информация об атрибутах, связанных с другими
 справочниками репозитория. Данная информация может использоваться для
 задания отметки по этим атрибутам. Если в справочнике НСИ не настроены
 связи, то в результате будет доступен только его моникёр.


Дальнейшая работа по заданию значений атрибутов у созданного элемента
 осуществляется с помощью операций [SetRdsElement](SetRdsElement.htm),
 [SetRdsElements](SetRdsElements.htm).


После применения всех изменений выполните операцию [CloseRdsElement](CloseRdsElement.htm)
 для освобождения ресурсов, которые были выделены для связанных справочников.


## Пример


Ниже приведён пример создания нового элемента в справочнике НСИ. В запросе
 передаётся моникёр открытого экземпляра справочника НСИ, в ответе возвращается
 информация об атрибутах, связанных с другими справочниками репозитория.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CreateRdsElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRds xmlns="****">
  <id>IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA</id>  </tRds>
  </CreateRdsElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CreateRdsElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA</id>  </id>
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <id>TOLINK</id>  <value>IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA!Links!1!DimSelection</value>  </it>
  </its>
  </CreateRdsElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CreateRdsElement" :
  {
   "tRds" :
    {
     "id" : "IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA"
    }
  }
}

### JSON-ответ:


{
 "CreateRdsElementResult" :
  {
   "id" :
    {
     "id" : "IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA"
    },
   "its" :
    {
     "it" :
      [
        {
         "id" : "TOLINK",
         "value" : "IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA!Links!1!DimSelection"
        }
      ]
    }
  }
}


public static CreateRdsElementResult CreateRdsElement(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tCreate = new CreateRdsElement()
    {
        tRds = new RdsId() { id = moniker }
    };
    // Создание элемента
    var tResult = somClient.CreateRdsElement(tCreate);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
