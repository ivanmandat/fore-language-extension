# GetAdHoc: Операция

GetAdHoc: Операция
-


**


# GetAdHoc


## Синтаксис


GetAdHocResult GetAdHoc(AdHocId tAdHocId, GetAdHocMdArg
 tArg)


## Параметры


tAdHocId. Моникёр открытого
 экземпляра аналитической панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetAdHoc извлекает
 метаданные аналитической панели.


## Комментарии


Операция позволяет получить информацию о структуре аналитической панели,
 источниках данных для блоков, параметры синхронизации различных измерений.
 Также с помощью операции GetAdHoc
 можно экспортировать аналитическую панель в необходимый формат. Для выполнения
 операции укажите в поле tAdHocId
 моникёр экземпляра аналитической панели, а в поле tArg.pattern
 шаблон, в соответствии с которым будут извлекаться метаданные. Моникёр
 может быть получен при выполнении операции [OpenAdhoc](OpenAdHoc.htm).
 Результатом работы операции будут запрошенные метаданные.


## Пример


Пример получения информации об источниках данных и регламентных отчетах,
 которые выступают в качестве источников данных для блоков аналитической
 панели. Также будет получена информация об активном слайде аналитической
 панели. В теле запроса передается моникёр аналитической панели и шаблон,
 определяющий необходимость получить указанную информацию. В ответе приходят
 запрошенные метаданные.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<GetAdHoc
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../minus.gif)](../../#)<tAdHocId xmlns="** **">


						  <id>S1!M!S!AdHoc1</id>


					  </tAdHocId>


					[![](../../minus.gif)](../../#)<tArg xmlns="** **">


						[![](../../minus.gif)](../../#)<pattern>


							  <obInst>true</obInst>


							[![](../../minus.gif)](../../#)<dsoPattern>


								  <objects>Get</objects>


							  </dsoPattern>


							[![](../../minus.gif)](../../#)<dsoLinkedPattern>


								  <objects>Get</objects>


							  </dsoLinkedPattern>


							  <dataSourceObjects>Get</dataSourceObjects>


							  <dataSourceLinkedObjects>Get</dataSourceLinkedObjects>


							[![](../../minus.gif)](../../#)<layout>


								  <activeSlideKey>true</activeSlideKey>


								  <activeSlideId>true</activeSlideId>


								  <slides>Get</slides>


								[![](../../minus.gif)](../../#)<allSlidesPattern>


									  <animation>false</animation>


									  <viewModeImages>false</viewModeImages>


									  <mainPanel>false</mainPanel>


								  </allSlidesPattern>


								[![](../../minus.gif)](../../#)<activeSlidePattern>


									  <animation>false</animation>


									  <viewModeImages>false</viewModeImages>


									  <mainPanel>true</mainPanel>


								  </activeSlidePattern>


							  </layout>


						  </pattern>


					  </tArg>


				  </GetAdHoc>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<GetAdHocResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../minus.gif)](../../#)<id xmlns="** **">


						  <id>S1!M!S!AdHoc1</id>


					  </id>


					[![](../../minus.gif)](../../#)<meta xmlns="** **">


						[![](../../minus.gif)](../../#)<obInst>


							[![](../../minus.gif)](../../#)<obDesc isShortcut="**0**"
							 isLink="**0**" fullUrl="**/**"
							 ver="**1**" hf="**0**">


								  <i>ADHOC_SAMPLE</i>


								  <n>Аналитическая
								 панель</n>


								  <k>87502</k>


								  <c>8448</c>


								  <p>6714</p>


								  <h>0</h>


								  <hasPrv>0</hasPrv>


								  <ic>0</ic>


								  <isPermanent>1</isPermanent>


								  <isTemp>0</isTemp>


							  </obDesc>


						  </obInst>


						  <dirty>0</dirty>


						[![](../../minus.gif)](../../#)<dataSourceObjects>


							[![](../../minus.gif)](../../#)<its>


								[![](../../minus.gif)](../../#)<it>


									  <id>SE3R70CE6FP6L2GL</id>


									  <linked>0</linked>


									[![](../../minus.gif)](../../#)<dsoObject>


										  <k>87504</k>


										  <id>OBJ87504</id>


										  <n>Экспресс-отчет</n>


										  <vis>1</vis>


									  </dsoObject>


									  <changeCounter>0</changeCounter>


									  <undoRedoChangeCounter>0</undoRedoChangeCounter>


									  <slideKey>2</slideKey>


								  </it>


								[![](../../minus.gif)](../../#)<it>


									  <id>S6TXGOGDW3YQXKP1</id>


									  <linked>0</linked>


									[![](../../minus.gif)](../../#)<dsoObject>


										  <k>87505</k>


										  <id>OBJ87505</id>


										  <n>Экспресс-отчет</n>


										  <vis>1</vis>


									  </dsoObject>


									  <changeCounter>0</changeCounter>


									  <undoRedoChangeCounter>0</undoRedoChangeCounter>


									  <slideKey>1</slideKey>


								  </it>


							  </its>


							  <autoSyncNewDso>0</autoSyncNewDso>


							  <autoUpdateSources>1</autoUpdateSources>


						  </dataSourceObjects>


						[![](../../minus.gif)](../../#)<dataSourceLinkedObjects>


						  <its />


							  <autoSyncNewDso>0</autoSyncNewDso>


							  <autoUpdateSources>1</autoUpdateSources>


						  </dataSourceLinkedObjects>


						[![](../../minus.gif)](../../#)<Md8>


							  <activeSlideKey>1</activeSlideKey>


							[![](../../minus.gif)](../../#)<slides>


								[![](../../minus.gif)](../../#)<its>


									[![](../../minus.gif)](../../#)<it>


										  <key>1</key>


										  <id>1C069D65-46D1-471D-A1ED-DAB36359DE9B</id>


										  <visible>1</visible>


										  <name>Слайд1</name>


										  <index>0</index>


										[![](../../minus.gif)](../../#)<mainPanel>


											[![](../../minus.gif)](../../#)<block type="**Slide**" key="**1C069D65-46D1-471D-A1ED-DAB36359DE9B**">


												[![](../../minus.gif)](../../#)<prop
												 isArrFlg="**1**"
												 tag="**background**">


												  <prop
												 isArrFlg="**1**"
												 tag="**backgroundColor**"
												 val="**#ffffff**" />


												  <prop
												 tag="**gradientColor**"
												 val="**#c9c9c9**" />


												  <prop
												 tag="**gradientAngle**"
												 val="**270**" />


												  </prop>


												[![](../../minus.gif)](../../#)<prop
												 tag="**decor**">


													[![](../../minus.gif)](../../#)<prop
													 tag="**paddings**">


													  <prop
													 isArrFlg="**1**"
													 tag="**usePaddings**"
													 val="**1**" />


													  <prop
													 tag="**left**"
													 val="**10**" />


													  <prop
													 tag="**right**"
													 val="**10**" />


													  <prop
													 tag="**top**"
													 val="**10**" />


													  <prop
													 tag="**bottom**"
													 val="**10**" />


													  </prop>


												  </prop>


											  <prop tag="**autoLayout**" val="**1**" />


												[![](../../minus.gif)](../../#)<prop
												 tag="**layouts**">


													[![](../../minus.gif)](../../#)<area
													 key="**S577W4BTBFEE9Z9W**">


														[![](../../minus.gif)](../../#)<block
														 type="**Grid**"
														 key="**S577W4BTBFEE9Z9W**">


														  <prop
														 isArrFlg="**1**"
														 tag="**name**"
														 val="**Блок
														 7**" />


															[![](../../minus.gif)](../../#)<prop
															 tag="**background**">


															  <prop
															 isArrFlg="**1**"
															 tag="**useBackground**"
															 val="**1**"
															 />


															  <prop
															 tag="**backgroundColor**"
															 val="**#ffffff**"
															 />


															  <prop
															 tag="**useGradient**"
															 val="**0**"
															 />


															  <prop
															 tag="**gradientColor**"
															 val="**#c9c9c9**"
															 />


															  <prop
															 tag="**gradientAngle**"
															 val="**270**"
															 />


															  </prop>


															[![](../../minus.gif)](../../#)<prop
															 tag="**layout**">


															  <prop
															 isArrFlg="**1**"
															 tag="**left**"
															 val="**0**"
															 />


															  <prop
															 tag="**right**"
															 val="**0**"
															 />


															  <prop
															 tag="**top**"
															 val="**0**"
															 />


															  <prop
															 tag="**bottom**"
															 val="**0**"
															 />


															  <prop
															 tag="**leftUnit**"
															 val="**%**"
															 />


															  <prop
															 tag="**rightUnit**"
															 val="**%**"
															 />


															  <prop
															 tag="**topUnit**"
															 val="**%**"
															 />


															  <prop
															 tag="**bottomUnit**"
															 val="**%**"
															 />


															  <prop
															 tag="**anchorTop**"
															 val="**1**"
															 />


															  <prop
															 tag="**anchorBottom**"
															 val="**1**"
															 />


															  <prop
															 tag="**anchorLeft**"
															 val="**1**"
															 />


															  <prop
															 tag="**anchorRight**"
															 val="**1**"
															 />


															  </prop>


															[![](../../minus.gif)](../../#)<prop
															 tag="**margins**">


															  <prop
															 tag="**useMargins**"
															 val="**1**"
															 />


															  </prop>


															[![](../../minus.gif)](../../#)<prop
															 tag="**decor**">


															  <prop
															 isArrFlg="**1**"
															 tag="**cornerRadius**"
															 val="**5**"
															 />


															  <prop
															 tag="**useBorderRadius**"
															 val="**0**"
															 />


															  <prop
															 tag="**useBorder**"
															 val="**0**"
															 />


															  <prop
															 tag="**borderColor**"
															 val="**#c9c9c9**"
															 />


															  <prop
															 tag="**borderWidth**"
															 val="**1**"
															 />


															  <prop
															 tag="**useShadow**"
															 val="**0**"
															 />


															  <prop
															 tag="**shadowColor**"
															 val="**#000000**"
															 />


															  <prop
															 tag="**shadowWidth**"
															 val="**8**"
															 />


															  <prop
															 tag="**shadowOpacity**"
															 val="**10**"
															 />


																[![](../../minus.gif)](../../#)<prop
																 tag="**paddings**">


																  <prop
																 isArrFlg="**1**"
																 tag="**usePaddings**"
																 val="**0**"
																 />


																  <prop
																 tag="**left**"
																 val="**10**"
																 />


																  <prop
																 tag="**right**"
																 val="**10**"
																 />


																  <prop
																 tag="**top**"
																 val="**10**"
																 />


																  <prop
																 tag="**bottom**"
																 val="**10**"
																 />


																  </prop>


															  </prop>


															[![](../../minus.gif)](../../#)<prop
															 tag="**title**">


															  <prop
															 isArrFlg="**1**"
															 tag="**show**"
															 val="**0**"
															 />


																[![](../../minus.gif)](../../#)<prop
																 tag="**font**">


																  <prop
																 isArrFlg="**1**"
																 tag="**color**"
																 val="**#ababab**"
																 />


																  <prop
																 tag="**family**"
																 val="**Calibri**"
																 />


																  <prop
																 tag="**size**"
																 val="**10**"
																 />


																  </prop>


															  <prop
															 tag="**align**"
															 val="**Left**"
															 />


															  </prop>


															[![](../../minus.gif)](../../#)<prop
															 tag="**divider**">


															  <prop
															 isArrFlg="**1**"
															 tag="**show**"
															 val="**1**"
															 />


															  <prop
															 tag="**color**"
															 val="**#c9c9c9**"
															 />


															  <prop
															 tag="**height**"
															 val="**1**"
															 />


															  <prop
															 tag="**blurSize**"
															 val="**25**"
															 />


															  <prop
															 tag="**useBlur**"
															 val="**1**"
															 />


															  </prop>


															[![](../../minus.gif)](../../#)<prop
															 tag="**cols**">


															  <item
															 isArrFlg="**1**"
															 />


															  </prop>


															[![](../../minus.gif)](../../#)<prop
															 tag="**rows**">


															  <item
															 isArrFlg="**1**"
															 />


															  </prop>


															[![](../../minus.gif)](../../#)<prop
															 tag="**cells**">


																[![](../../minus.gif)](../../#)<area
																 key="**S59DM848RIUH64Q4**">


																  <prop
																 isArrFlg="**1**"
																 tag="**row**"
																 val="**0**"
																 />


																  <prop
																 tag="**col**"
																 val="**0**"
																 />


																	[![](../../minus.gif)](../../#)<block
																	 type="**Panel**"
																	 key="**S59DM848RIUH64Q4**">


																		[![](../../minus.gif)](../../#)<prop
																		 isArrFlg="**1**"
																		 tag="**background**">


																		  <prop
																		 isArrFlg="**1**"
																		 tag="**useBackground**"
																		 val="**0**"
																		 />


																		  <prop
																		 tag="**backgroundColor**"
																		 val="**#ffffff**"
																		 />


																		  <prop
																		 tag="**useGradient**"
																		 val="**0**"
																		 />


																		  <prop
																		 tag="**gradientColor**"
																		 val="**#c9c9c9**"
																		 />


																		  <prop
																		 tag="**gradientAngle**"
																		 val="**270**"
																		 />


																		  </prop>


																		[![](../../minus.gif)](../../#)<prop
																		 tag="**decor**">


																		  <prop
																		 isArrFlg="**1**"
																		 tag="**cornerRadius**"
																		 val="**5**"
																		 />


																		  <prop
																		 tag="**useBorderRadius**"
																		 val="**0**"
																		 />


																		  <prop
																		 tag="**useBorder**"
																		 val="**0**"
																		 />


																		  <prop
																		 tag="**borderColor**"
																		 val="**#c9c9c9**"
																		 />


																		  <prop
																		 tag="**borderWidth**"
																		 val="**1**"
																		 />


																		  <prop
																		 tag="**useShadow**"
																		 val="**0**"
																		 />


																		  <prop
																		 tag="**shadowColor**"
																		 val="**#000000**"
																		 />


																		  <prop
																		 tag="**shadowWidth**"
																		 val="**8**"
																		 />


																		  <prop
																		 tag="**shadowOpacity**"
																		 val="**10**"
																		 />


																			[![](../../minus.gif)](../../#)<prop
																			 tag="**paddings**">


																			  <prop
																			 isArrFlg="**1**"
																			 tag="**usePaddings**"
																			 val="**0**"
																			 />


																			  <prop
																			 tag="**left**"
																			 val="**10**"
																			 />


																			  <prop
																			 tag="**right**"
																			 val="**10**"
																			 />


																			  <prop
																			 tag="**top**"
																			 val="**10**"
																			 />


																			  <prop
																			 tag="**bottom**"
																			 val="**10**"
																			 />


																			  </prop>


																		  </prop>


																		[![](../../minus.gif)](../../#)<prop
																		 tag="**title**">


																		  <prop
																		 isArrFlg="**1**"
																		 tag="**show**"
																		 val="**0**"
																		 />


																			[![](../../minus.gif)](../../#)<prop
																			 tag="**font**">


																			  <prop
																			 isArrFlg="**1**"
																			 tag="**color**"
																			 val="**#ababab**"
																			 />


																			  <prop
																			 tag="**family**"
																			 val="**Calibri**"
																			 />


																			  <prop
																			 tag="**size**"
																			 val="**10**"
																			 />


																			  </prop>


																		  <prop
																		 tag="**align**"
																		 val="**Left**"
																		 />


																		  </prop>


																		[![](../../minus.gif)](../../#)<prop
																		 tag="**divider**">


																		  <prop
																		 isArrFlg="**1**"
																		 tag="**show**"
																		 val="**1**"
																		 />


																		  <prop
																		 tag="**color**"
																		 val="**#c9c9c9**"
																		 />


																		  <prop
																		 tag="**height**"
																		 val="**1**"
																		 />


																		  <prop
																		 tag="**blurSize**"
																		 val="**25**"
																		 />


																		  <prop
																		 tag="**useBlur**"
																		 val="**1**"
																		 />


																		  </prop>


																		[![](../../minus.gif)](../../#)<prop
																		 tag="**layouts**">


																			[![](../../minus.gif)](../../#)<area
																			 key="**S6TXGOGDW3YQXKP1**">


																				[![](../../minus.gif)](../../#)<block
																				 type="**Table**"
																				 key="**S6TXGOGDW3YQXKP1**">


																				  <prop
																				 isArrFlg="**1**"
																				 tag="**name**"
																				 val="**Блок
																				 9**"
																				 />


																					[![](../../minus.gif)](../../#)<prop
																					 tag="**background**">


																					  <prop
																					 isArrFlg="**1**"
																					 tag="**useBackground**"
																					 val="**1**"
																					 />


																					  <prop
																					 tag="**backgroundColor**"
																					 val="**#ffffff**"
																					 />


																					  <prop
																					 tag="**useGradient**"
																					 val="**0**"
																					 />


																					  <prop
																					 tag="**gradientColor**"
																					 val="**#c9c9c9**"
																					 />


																					  <prop
																					 tag="**gradientAngle**"
																					 val="**270**"
																					 />


																					  </prop>


																					[![](../../minus.gif)](../../#)<prop
																					 tag="**layout**">


																					  <prop
																					 isArrFlg="**1**"
																					 tag="**left**"
																					 val="**0**"
																					 />


																					  <prop
																					 tag="**right**"
																					 val="**0**"
																					 />


																					  <prop
																					 tag="**top**"
																					 val="**0**"
																					 />


																					  <prop
																					 tag="**bottom**"
																					 val="**0**"
																					 />


																					  <prop
																					 tag="**leftUnit**"
																					 val="**%**"
																					 />


																					  <prop
																					 tag="**rightUnit**"
																					 val="**%**"
																					 />


																					  <prop
																					 tag="**topUnit**"
																					 val="**%**"
																					 />


																					  <prop
																					 tag="**bottomUnit**"
																					 val="**%**"
																					 />


																					  <prop
																					 tag="**anchorTop**"
																					 val="**1**"
																					 />


																					  <prop
																					 tag="**anchorBottom**"
																					 val="**1**"
																					 />


																					  <prop
																					 tag="**anchorLeft**"
																					 val="**1**"
																					 />


																					  <prop
																					 tag="**anchorRight**"
																					 val="**1**"
																					 />


																					  </prop>


																					[![](../../minus.gif)](../../#)<prop
																					 tag="**margins**">


																					  <prop
																					 tag="**useMargins**"
																					 val="**1**"
																					 />


																					  </prop>


																					[![](../../minus.gif)](../../#)<prop
																					 tag="**decor**">


																					  <prop
																					 isArrFlg="**1**"
																					 tag="**cornerRadius**"
																					 val="**5**"
																					 />


																					  <prop
																					 tag="**useBorderRadius**"
																					 val="**0**"
																					 />


																					  <prop
																					 tag="**useBorder**"
																					 val="**1**"
																					 />


																					  <prop
																					 tag="**borderColor**"
																					 val="**#c9c9c9**"
																					 />


																					  <prop
																					 tag="**borderWidth**"
																					 val="**1**"
																					 />


																					  <prop
																					 tag="**useShadow**"
																					 val="**0**"
																					 />


																					  <prop
																					 tag="**shadowColor**"
																					 val="**#000000**"
																					 />


																					  <prop
																					 tag="**shadowWidth**"
																					 val="**8**"
																					 />


																					  <prop
																					 tag="**shadowOpacity**"
																					 val="**10**"
																					 />


																						[![](../../minus.gif)](../../#)<prop
																						 tag="**paddings**">


																						  <prop
																						 isArrFlg="**1**"
																						 tag="**usePaddings**"
																						 val="**0**"
																						 />


																						  <prop
																						 tag="**left**"
																						 val="**10**"
																						 />


																						  <prop
																						 tag="**right**"
																						 val="**10**"
																						 />


																						  <prop
																						 tag="**top**"
																						 val="**10**"
																						 />


																						  <prop
																						 tag="**bottom**"
																						 val="**10**"
																						 />


																						  </prop>


																					  </prop>


																					[![](../../minus.gif)](../../#)<prop
																					 tag="**title**">


																					  <prop
																					 isArrFlg="**1**"
																					 tag="**show**"
																					 val="**0**"
																					 />


																						[![](../../minus.gif)](../../#)<prop
																						 tag="**font**">


																						  <prop
																						 isArrFlg="**1**"
																						 tag="**color**"
																						 val="**#ababab**"
																						 />


																						  <prop
																						 tag="**family**"
																						 val="**Calibri**"
																						 />


																						  <prop
																						 tag="**size**"
																						 val="**10**"
																						 />


																						  </prop>


																					  <prop
																					 tag="**align**"
																					 val="**Left**"
																					 />


																					  </prop>


																					[![](../../minus.gif)](../../#)<prop
																					 tag="**divider**">


																					  <prop
																					 isArrFlg="**1**"
																					 tag="**show**"
																					 val="**1**"
																					 />


																					  <prop
																					 tag="**color**"
																					 val="**#c9c9c9**"
																					 />


																					  <prop
																					 tag="**height**"
																					 val="**1**"
																					 />


																					  <prop
																					 tag="**blurSize**"
																					 val="**25**"
																					 />


																					  <prop
																					 tag="**useBlur**"
																					 val="**1**"
																					 />


																					  </prop>


																				  </block>


																			  </area>


																		  </prop>


																	  </block>


																  </area>


															  </prop>


														  </block>


													  </area>


												  </prop>


											  </block>


										  </mainPanel>


									  </it>


									[![](../../minus.gif)](../../#)<it>


										  <key>2</key>


										  <id>SD7OZR42LYHXHA2V</id>


										  <visible>1</visible>


										  <name>Слайд2</name>


										  <index>1</index>


									  </it>


								  </its>


							  </slides>


						  </Md8>


						  <autoUpdateSources>1</autoUpdateSources>


						  <calcOnChangedData>2</calcOnChangedData>


					  </meta>


				  </GetAdHocResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetAdHoc" :
  {
   "tAdHocId" :
    {
     "id" : "S1!M!S!AdHoc1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "dsoPattern" :
        {
         "objects" : "Get"
        },
       "dsoLinkedPattern" :
        {
         "objects" : "Get"
        },
       "dataSourceObjects" : "Get",
       "dataSourceLinkedObjects" : "Get",
       "layout" :
        {
         "activeSlideKey" : "true",
         "activeSlideId" : "true",
         "slides" : "Get",
         "allSlidesPattern" :
          {
           "animation" : "false",
           "viewModeImages" : "false",
           "mainPanel" : "false"
          },
         "activeSlidePattern" :
          {
           "animation" : "false",
           "viewModeImages" : "false",
           "mainPanel" : "true"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetAdHocResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!AdHoc1"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@fullUrl" : "\/",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "1",
         "@hf" : "0",
         "i" : "ADHOC_SAMPLE",
         "n" : "Аналитическая панель",
         "k" : "87502",
         "c" : "8448",
         "p" : "6714",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "dataSourceObjects" :
      {
       "its" :
        {
         "it" :
          [
            {
             "id" : "SE3R70CE6FP6L2GL",
             "linked" : "0",
             "dsoObject" :
              {
               "k" : "87504",
               "id" : "OBJ87504",
               "n" : "Экспресс-отчет",
               "vis" : "1"
              },
             "changeCounter" : "0",
             "undoRedoChangeCounter" : "0",
             "slideKey" : "2"
            },
            {
             "id" : "S6TXGOGDW3YQXKP1",
             "linked" : "0",
             "dsoObject" :
              {
               "k" : "87505",
               "id" : "OBJ87505",
               "n" : "Экспресс-отчет",
               "vis" : "1"
              },
             "changeCounter" : "0",
             "undoRedoChangeCounter" : "0",
             "slideKey" : "1"
            }
          ]
        },
       "autoSyncNewDso" : "0",
       "autoUpdateSources" : "1"
      },
     "dataSourceLinkedObjects" :
      {
       "its" : "",
       "autoSyncNewDso" : "0",
       "autoUpdateSources" : "1"
      },
     "Md8" :
      {
       "activeSlideKey" : "1",
       "slides" :
        {
         "its" :
          {
           "it" :
            [
              {
               "key" : "1",
               "id" : "1C069D65-46D1-471D-A1ED-DAB36359DE9B",
               "visible" : "1",
               "name" : "Слайд1",
               "index" : "0",
               "mainPanel" :
                {
                 "block" :
                  {
                   "@type" : "Slide",
                   "@key" : "1C069D65-46D1-471D-A1ED-DAB36359DE9B",
                   "prop" :
                    [
                      {
                       "@isArrFlg" : "1",
                       "@tag" : "background",
                       "prop" :
                        [
                          {
                           "@val" : "#ffffff",
                           "@isArrFlg" : "1",
                           "@tag" : "backgroundColor"
                          },
                          {
                           "@val" : "#c9c9c9",
                           "@tag" : "gradientColor"
                          },
                          {
                           "@val" : "270",
                           "@tag" : "gradientAngle"
                          }
                        ]
                      },
                      {
                       "@tag" : "decor",
                       "prop" :
                        {
                         "@tag" : "paddings",
                         "prop" :
                          [
                            {
                             "@val" : "1",
                             "@isArrFlg" : "1",
                             "@tag" : "usePaddings"
                            },
                            {
                             "@val" : "10",
                             "@tag" : "left"
                            },
                            {
                             "@val" : "10",
                             "@tag" : "right"
                            },
                            {
                             "@val" : "10",
                             "@tag" : "top"
                            },
                            {
                             "@val" : "10",
                             "@tag" : "bottom"
                            }
                          ]
                        }
                      },
                      {
                       "@val" : "1",
                       "@tag" : "autoLayout"
                      },
                      {
                       "@tag" : "layouts",
                       "area" :
                        {
                         "@key" : "S577W4BTBFEE9Z9W",
                         "block" :
                          {
                           "@type" : "Grid",
                           "@key" : "S577W4BTBFEE9Z9W",
                           "prop" :
                            [
                              {
                               "@val" : "Блок 7",
                               "@isArrFlg" : "1",
                               "@tag" : "name"
                              },
                              {
                               "@tag" : "background",
                               "prop" :
                                [
                                  {
                                   "@val" : "1",
                                   "@isArrFlg" : "1",
                                   "@tag" : "useBackground"
                                  },
                                  {
                                   "@val" : "#ffffff",
                                   "@tag" : "backgroundColor"
                                  },
                                  {
                                   "@val" : "0",
                                   "@tag" : "useGradient"
                                  },
                                  {
                                   "@val" : "#c9c9c9",
                                   "@tag" : "gradientColor"
                                  },
                                  {
                                   "@val" : "270",
                                   "@tag" : "gradientAngle"
                                  }
                                ]
                              },
                              {
                               "@tag" : "layout",
                               "prop" :
                                [
                                  {
                                   "@val" : "0",
                                   "@isArrFlg" : "1",
                                   "@tag" : "left"
                                  },
                                  {
                                   "@val" : "0",
                                   "@tag" : "right"
                                  },
                                  {
                                   "@val" : "0",
                                   "@tag" : "top"
                                  },
                                  {
                                   "@val" : "0",
                                   "@tag" : "bottom"
                                  },
                                  {
                                   "@val" : "%",
                                   "@tag" : "leftUnit"
                                  },
                                  {
                                   "@val" : "%",
                                   "@tag" : "rightUnit"
                                  },
                                  {
                                   "@val" : "%",
                                   "@tag" : "topUnit"
                                  },
                                  {
                                   "@val" : "%",
                                   "@tag" : "bottomUnit"
                                  },
                                  {
                                   "@val" : "1",
                                   "@tag" : "anchorTop"
                                  },
                                  {
                                   "@val" : "1",
                                   "@tag" : "anchorBottom"
                                  },
                                  {
                                   "@val" : "1",
                                   "@tag" : "anchorLeft"
                                  },
                                  {
                                   "@val" : "1",
                                   "@tag" : "anchorRight"
                                  }
                                ]
                              },
                              {
                               "@tag" : "margins",
                               "prop" :
                                {
                                 "@val" : "1",
                                 "@tag" : "useMargins"
                                }
                              },
                              {
                               "@tag" : "decor",
                               "prop" :
                                [
                                  {
                                   "@val" : "5",
                                   "@isArrFlg" : "1",
                                   "@tag" : "cornerRadius"
                                  },
                                  {
                                   "@val" : "0",
                                   "@tag" : "useBorderRadius"
                                  },
                                  {
                                   "@val" : "0",
                                   "@tag" : "useBorder"
                                  },
                                  {
                                   "@val" : "#c9c9c9",
                                   "@tag" : "borderColor"
                                  },
                                  {
                                   "@val" : "1",
                                   "@tag" : "borderWidth"
                                  },
                                  {
                                   "@val" : "0",
                                   "@tag" : "useShadow"
                                  },
                                  {
                                   "@val" : "#000000",
                                   "@tag" : "shadowColor"
                                  },
                                  {
                                   "@val" : "8",
                                   "@tag" : "shadowWidth"
                                  },
                                  {
                                   "@val" : "10",
                                   "@tag" : "shadowOpacity"
                                  },
                                  {
                                   "@tag" : "paddings",
                                   "prop" :
                                    [
                                      {
                                       "@val" : "0",
                                       "@isArrFlg" : "1",
                                       "@tag" : "usePaddings"
                                      },
                                      {
                                       "@val" : "10",
                                       "@tag" : "left"
                                      },
                                      {
                                       "@val" : "10",
                                       "@tag" : "right"
                                      },
                                      {
                                       "@val" : "10",
                                       "@tag" : "top"
                                      },
                                      {
                                       "@val" : "10",
                                       "@tag" : "bottom"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                               "@tag" : "title",
                               "prop" :
                                [
                                  {
                                   "@val" : "0",
                                   "@isArrFlg" : "1",
                                   "@tag" : "show"
                                  },
                                  {
                                   "@tag" : "font",
                                   "prop" :
                                    [
                                      {
                                       "@val" : "#ababab",
                                       "@isArrFlg" : "1",
                                       "@tag" : "color"
                                      },
                                      {
                                       "@val" : "Calibri",
                                       "@tag" : "family"
                                      },
                                      {
                                       "@val" : "10",
                                       "@tag" : "size"
                                      }
                                    ]
                                  },
                                  {
                                   "@val" : "Left",
                                   "@tag" : "align"
                                  }
                                ]
                              },
                              {
                               "@tag" : "divider",
                               "prop" :
                                [
                                  {
                                   "@val" : "1",
                                   "@isArrFlg" : "1",
                                   "@tag" : "show"
                                  },
                                  {
                                   "@val" : "#c9c9c9",
                                   "@tag" : "color"
                                  },
                                  {
                                   "@val" : "1",
                                   "@tag" : "height"
                                  },
                                  {
                                   "@val" : "25",
                                   "@tag" : "blurSize"
                                  },
                                  {
                                   "@val" : "1",
                                   "@tag" : "useBlur"
                                  }
                                ]
                              },
                              {
                               "@tag" : "cols",
                               "item" :
                                {
                                 "@isArrFlg" : "1"
                                }
                              },
                              {
                               "@tag" : "rows",
                               "item" :
                                {
                                 "@isArrFlg" : "1"
                                }
                              },
                              {
                               "@tag" : "cells",
                               "area" :
                                {
                                 "@key" : "S59DM848RIUH64Q4",
                                 "prop" :
                                  [
                                    {
                                     "@val" : "0",
                                     "@isArrFlg" : "1",
                                     "@tag" : "row"
                                    },
                                    {
                                     "@val" : "0",
                                     "@tag" : "col"
                                    }
                                  ],
                                 "block" :
                                  {
                                   "@type" : "Panel",
                                   "@key" : "S59DM848RIUH64Q4",
                                   "prop" :
                                    [
                                      {
                                       "@isArrFlg" : "1",
                                       "@tag" : "background",
                                       "prop" :
                                        [
                                          {
                                           "@val" : "0",
                                           "@isArrFlg" : "1",
                                           "@tag" : "useBackground"
                                          },
                                          {
                                           "@val" : "#ffffff",
                                           "@tag" : "backgroundColor"
                                          },
                                          {
                                           "@val" : "0",
                                           "@tag" : "useGradient"
                                          },
                                          {
                                           "@val" : "#c9c9c9",
                                           "@tag" : "gradientColor"
                                          },
                                          {
                                           "@val" : "270",
                                           "@tag" : "gradientAngle"
                                          }
                                        ]
                                      },
                                      {
                                       "@tag" : "decor",
                                       "prop" :
                                        [
                                          {
                                           "@val" : "5",
                                           "@isArrFlg" : "1",
                                           "@tag" : "cornerRadius"
                                          },
                                          {
                                           "@val" : "0",
                                           "@tag" : "useBorderRadius"
                                          },
                                          {
                                           "@val" : "0",
                                           "@tag" : "useBorder"
                                          },
                                          {
                                           "@val" : "#c9c9c9",
                                           "@tag" : "borderColor"
                                          },
                                          {
                                           "@val" : "1",
                                           "@tag" : "borderWidth"
                                          },
                                          {
                                           "@val" : "0",
                                           "@tag" : "useShadow"
                                          },
                                          {
                                           "@val" : "#000000",
                                           "@tag" : "shadowColor"
                                          },
                                          {
                                           "@val" : "8",
                                           "@tag" : "shadowWidth"
                                          },
                                          {
                                           "@val" : "10",
                                           "@tag" : "shadowOpacity"
                                          },
                                          {
                                           "@tag" : "paddings",
                                           "prop" :
                                            [
                                              {
                                               "@val" : "0",
                                               "@isArrFlg" : "1",
                                               "@tag" : "usePaddings"
                                              },
                                              {
                                               "@val" : "10",
                                               "@tag" : "left"
                                              },
                                              {
                                               "@val" : "10",
                                               "@tag" : "right"
                                              },
                                              {
                                               "@val" : "10",
                                               "@tag" : "top"
                                              },
                                              {
                                               "@val" : "10",
                                               "@tag" : "bottom"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                       "@tag" : "title",
                                       "prop" :
                                        [
                                          {
                                           "@val" : "0",
                                           "@isArrFlg" : "1",
                                           "@tag" : "show"
                                          },
                                          {
                                           "@tag" : "font",
                                           "prop" :
                                            [
                                              {
                                               "@val" : "#ababab",
                                               "@isArrFlg" : "1",
                                               "@tag" : "color"
                                              },
                                              {
                                               "@val" : "Calibri",
                                               "@tag" : "family"
                                              },
                                              {
                                               "@val" : "10",
                                               "@tag" : "size"
                                              }
                                            ]
                                          },
                                          {
                                           "@val" : "Left",
                                           "@tag" : "align"
                                          }
                                        ]
                                      },
                                      {
                                       "@tag" : "divider",
                                       "prop" :
                                        [
                                          {
                                           "@val" : "1",
                                           "@isArrFlg" : "1",
                                           "@tag" : "show"
                                          },
                                          {
                                           "@val" : "#c9c9c9",
                                           "@tag" : "color"
                                          },
                                          {
                                           "@val" : "1",
                                           "@tag" : "height"
                                          },
                                          {
                                           "@val" : "25",
                                           "@tag" : "blurSize"
                                          },
                                          {
                                           "@val" : "1",
                                           "@tag" : "useBlur"
                                          }
                                        ]
                                      },
                                      {
                                       "@tag" : "layouts",
                                       "area" :
                                        {
                                         "@key" : "S6TXGOGDW3YQXKP1",
                                         "block" :
                                          {
                                           "@type" : "Table",
                                           "@key" : "S6TXGOGDW3YQXKP1",
                                           "prop" :
                                            [
                                              {
                                               "@val" : "Блок 9",
                                               "@isArrFlg" : "1",
                                               "@tag" : "name"
                                              },
                                              {
                                               "@tag" : "background",
                                               "prop" :
                                                [
                                                  {
                                                   "@val" : "1",
                                                   "@isArrFlg" : "1",
                                                   "@tag" : "useBackground"
                                                  },
                                                  {
                                                   "@val" : "#ffffff",
                                                   "@tag" : "backgroundColor"
                                                  },
                                                  {
                                                   "@val" : "0",
                                                   "@tag" : "useGradient"
                                                  },
                                                  {
                                                   "@val" : "#c9c9c9",
                                                   "@tag" : "gradientColor"
                                                  },
                                                  {
                                                   "@val" : "270",
                                                   "@tag" : "gradientAngle"
                                                  }
                                                ]
                                              },
                                              {
                                               "@tag" : "layout",
                                               "prop" :
                                                [
                                                  {
                                                   "@val" : "0",
                                                   "@isArrFlg" : "1",
                                                   "@tag" : "left"
                                                  },
                                                  {
                                                   "@val" : "0",
                                                   "@tag" : "right"
                                                  },
                                                  {
                                                   "@val" : "0",
                                                   "@tag" : "top"
                                                  },
                                                  {
                                                   "@val" : "0",
                                                   "@tag" : "bottom"
                                                  },
                                                  {
                                                   "@val" : "%",
                                                   "@tag" : "leftUnit"
                                                  },
                                                  {
                                                   "@val" : "%",
                                                   "@tag" : "rightUnit"
                                                  },
                                                  {
                                                   "@val" : "%",
                                                   "@tag" : "topUnit"
                                                  },
                                                  {
                                                   "@val" : "%",
                                                   "@tag" : "bottomUnit"
                                                  },
                                                  {
                                                   "@val" : "1",
                                                   "@tag" : "anchorTop"
                                                  },
                                                  {
                                                   "@val" : "1",
                                                   "@tag" : "anchorBottom"
                                                  },
                                                  {
                                                   "@val" : "1",
                                                   "@tag" : "anchorLeft"
                                                  },
                                                  {
                                                   "@val" : "1",
                                                   "@tag" : "anchorRight"
                                                  }
                                                ]
                                              },
                                              {
                                               "@tag" : "margins",
                                               "prop" :
                                                {
                                                 "@val" : "1",
                                                 "@tag" : "useMargins"
                                                }
                                              },
                                              {
                                               "@tag" : "decor",
                                               "prop" :
                                                [
                                                  {
                                                   "@val" : "5",
                                                   "@isArrFlg" : "1",
                                                   "@tag" : "cornerRadius"
                                                  },
                                                  {
                                                   "@val" : "0",
                                                   "@tag" : "useBorderRadius"
                                                  },
                                                  {
                                                   "@val" : "1",
                                                   "@tag" : "useBorder"
                                                  },
                                                  {
                                                   "@val" : "#c9c9c9",
                                                   "@tag" : "borderColor"
                                                  },
                                                  {
                                                   "@val" : "1",
                                                   "@tag" : "borderWidth"
                                                  },
                                                  {
                                                   "@val" : "0",
                                                   "@tag" : "useShadow"
                                                  },
                                                  {
                                                   "@val" : "#000000",
                                                   "@tag" : "shadowColor"
                                                  },
                                                  {
                                                   "@val" : "8",
                                                   "@tag" : "shadowWidth"
                                                  },
                                                  {
                                                   "@val" : "10",
                                                   "@tag" : "shadowOpacity"
                                                  },
                                                  {
                                                   "@tag" : "paddings",
                                                   "prop" :
                                                    [
                                                      {
                                                       "@val" : "0",
                                                       "@isArrFlg" : "1",
                                                       "@tag" : "usePaddings"
                                                      },
                                                      {
                                                       "@val" : "10",
                                                       "@tag" : "left"
                                                      },
                                                      {
                                                       "@val" : "10",
                                                       "@tag" : "right"
                                                      },
                                                      {
                                                       "@val" : "10",
                                                       "@tag" : "top"
                                                      },
                                                      {
                                                       "@val" : "10",
                                                       "@tag" : "bottom"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                               "@tag" : "title",
                                               "prop" :
                                                [
                                                  {
                                                   "@val" : "0",
                                                   "@isArrFlg" : "1",
                                                   "@tag" : "show"
                                                  },
                                                  {
                                                   "@tag" : "font",
                                                   "prop" :
                                                    [
                                                      {
                                                       "@val" : "#ababab",
                                                       "@isArrFlg" : "1",
                                                       "@tag" : "color"
                                                      },
                                                      {
                                                       "@val" : "Calibri",
                                                       "@tag" : "family"
                                                      },
                                                      {
                                                       "@val" : "10",
                                                       "@tag" : "size"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                   "@val" : "Left",
                                                   "@tag" : "align"
                                                  }
                                                ]
                                              },
                                              {
                                               "@tag" : "divider",
                                               "prop" :
                                                [
                                                  {
                                                   "@val" : "1",
                                                   "@isArrFlg" : "1",
                                                   "@tag" : "show"
                                                  },
                                                  {
                                                   "@val" : "#c9c9c9",
                                                   "@tag" : "color"
                                                  },
                                                  {
                                                   "@val" : "1",
                                                   "@tag" : "height"
                                                  },
                                                  {
                                                   "@val" : "25",
                                                   "@tag" : "blurSize"
                                                  },
                                                  {
                                                   "@val" : "1",
                                                   "@tag" : "useBlur"
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              },
              {
               "key" : "2",
               "id" : "SD7OZR42LYHXHA2V",
               "visible" : "1",
               "name" : "Слайд2",
               "index" : "1"
              }
            ]
          }
        }
      },
     "autoUpdateSources" : "1",
     "calcOnChangedData" : "2"
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


	Указанная ниже функция OpenCube
	 открывает куб. Моникёр соединения с репозиторием и идентификатор куба
	 передаются в качестве входных параметров. В примере используется функция
	 FindObjectById, код которой
	 приведен в примере «[Получение
	 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)». Результат выполнения
	 операции является результатом выполнения функции.


public static GetAdHocResult GetDataSourcesInfo(AdHocId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetAdHoc()
    {
        tArg = new GetAdHocMdArg()
        {
            pattern = new AdHocMdPattern()
            {
                dataSourceObjects = ListOperation.Get,
                dataSourceLinkedObjects = ListOperation.Get,
                dsoPattern = new DataSourcePattern()
                {
                    objects = ListOperation.Get,
                },
                dsoLinkedPattern = new DataSourcePattern()
                {
                    objects = ListOperation.Get
                },
                layout = new SlidesPattern()
                {
                    activeSlideId = true,
                    activeSlideKey = true,
                    activeSlidePattern = new SlideContentPattern()
                    {
                        mainPanel = true
                    },
                    allSlidesPattern = new SlideContentPattern(),
                    slides = ListOperation.Get
                }
            }
        },
        tAdHocId = moniker
    };
    //Получение метаданных
    var result = somClient.GetAdHoc(tGet);
    return result;
}


См. также:


[Работа
 с аналитической панелью](Adhoc_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
