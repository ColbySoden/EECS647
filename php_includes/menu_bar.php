<?php 
      if (isset($_SESSION['user'])) {
      	 $account = "Account";
      }
      else {
      	 $account = "Sign In";
      }
?> 
<div id="menu">
	<div id="menuMenu">
		<div id="menuLogo">
			<a href="index.php"><img src="./img/logo.png" id="logoImg" class="image" alt="rofl."></a>
		</div>
		<ul id="ulMenu">
		<?php 
		      if (isset($_SESSION['user'])) {
      		      	 echo "<li><a href=\"php_includes/signout.php\">Sign Out</a></li>";
		      }
		?>
			<li>
				<a href="index.php#signIn"> <?php echo $account; ?> </a>
			</li>
			<li>
				<a href="index.php#winningNum"> Winner </a>
			</li>
			<li>
				<a href="index.php#aboutUs"> About </a>
			</li>
			<li>
				<a href="index.php#itemSpace"> Item </a>
			</li>
		</ul>	
	</div>
	
</div>
 