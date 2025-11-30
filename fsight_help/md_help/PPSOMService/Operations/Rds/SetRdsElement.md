# SetRdsElement: Операция

SetRdsElement: Операция
-


**


# SetRdsElement


## Синтаксис


CreateRdsElementResult SetRdsElement(RdsId tRds,
 SetRdsElementArg tArg)


## Параметры


tRds. Моникёр
 открытого экземпляра справочника НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetRdsElement изменяет
 значения атрибутов у созданного/редактируемого элемента справочника НСИ.


## Комментарии


Операция используется после того, как была выполнена операция [CreateRdsElement](CreateRdsElement.htm)
 и до того, как все изменения будут сохранены с помощью операции [SetRdsElements](SetRdsElements.htm).
 Для выполнения операции укажите в поле tRds
 моникёр открытого экземпляра справочника НСИ. Моникёр может быть получен
 при выполнении операции [OpenRds](OpenRds.htm). В поле tArg укажите значения, задаваемые
 атрибутам. Если указывается значение для атрибута, который изменяет значение
 параметра связанного справочника, то связанный справочник будет перестроен.
 Обновлённая информация об его отметке будет доступна в результате выполнения
 операции.


## Пример


Ниже приведён пример изменения значения атрибута у элемента справочника
 НСИ. В запросе передаётся моникёр открытого экземпляра справочника НСИ
 и значения для атрибута. Если при изменении значения перестраивается какой-либо
 связанный справочник, то информация о нём будет доступна в ответе операции.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetRdsElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRds xmlns="****">
  <id>IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA</id>  </tRds>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <id>FOR_PARAM</id>  <value>2</value>  </it>
  </its>
  </tArg>
  </SetRdsElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetRdsElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA</id>  </id>
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <id>TOLINK</id>  <value>IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA!Links!1!DimSelection</value>  </it>
  </its>
  </SetRdsElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetRdsElement" :
  {
   "tRds" :
    {
     "id" : "IENCFEAEIJJEGOAEBOMILAAAFCDPKEPEOLCOBNEJCOFGNDKK!M!S!NMLBPBFAEIJJEGOAEGMHMCAMPNPBCIIHEAIADFGGFONBIEDAA"
    },
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "id" : "FOR_PARAM",
           "value" : "2"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetRdsElementResult" :
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


public static CreateRdsElementResult SetRdsElement(string moniker, AttrValPair[] attrsValues)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetRdsElement()
    {
        tArg = new SetRdsElementArg()
        {
            its = attrsValues
        },
        tRds = new RdsId() { id = moniker }
    };
    // Изменение атрибутов у элемента
    var tResult = somClient.SetRdsElement(tSet);
    return tResult;
}


См. также:


[Работа со справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
